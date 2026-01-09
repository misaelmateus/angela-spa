/**
 * Client fingerprinting for session identification
 * Generates a unique session ID based on browser characteristics
 */

export async function generateFingerprint(): Promise<string> {
  const components: string[] = [];

  // User agent
  components.push(navigator.userAgent);

  // Screen resolution
  components.push(`${screen.width}x${screen.height}`);
  components.push(`${screen.colorDepth}`);

  // Timezone offset
  components.push(String(new Date().getTimezoneOffset()));

  // Language
  components.push(navigator.language);

  // Platform
  components.push(navigator.platform);

  // Hardware concurrency
  if (navigator.hardwareConcurrency) {
    components.push(String(navigator.hardwareConcurrency));
  }

  // Storage availability
  components.push(String(!!window.sessionStorage));
  components.push(String(!!window.localStorage));

  // Canvas fingerprint
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = 200;
      canvas.height = 50;
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillStyle = '#f60';
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = '#069';
      ctx.fillText('Angela Spa', 2, 15);
      ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
      ctx.fillText('Angela Spa', 4, 17);
      const canvasData = canvas.toDataURL();
      components.push(canvasData);
    }
  } catch (e) {
    // Canvas fingerprinting not available
    components.push('no-canvas');
  }

  // Combine all components
  const fingerprint = components.join('|');

  // Generate hash
  const hash = await simpleHash(fingerprint);

  return hash;
}

/**
 * Simple hash function using SubtleCrypto API
 */
async function simpleHash(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Get or create session ID
 * Checks localStorage first, then generates new fingerprint
 */
export async function getOrCreateSessionId(): Promise<string> {
  const STORAGE_KEY = 'angela_session_id';
  const STORAGE_TIMESTAMP_KEY = 'angela_session_timestamp';
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  try {
    // Check if we have a stored session
    const storedSessionId = localStorage.getItem(STORAGE_KEY);
    const storedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);

    if (storedSessionId && storedTimestamp) {
      const timestamp = parseInt(storedTimestamp, 10);
      const now = Date.now();

      // If session ID is too long (old format), invalidate it
      if (storedSessionId.length > 64) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_TIMESTAMP_KEY);
      }
      // If session is still valid (within 30 minutes)
      else if (now - timestamp < SESSION_TIMEOUT) {
        // Update timestamp
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, String(now));
        return storedSessionId;
      }
    }

    // Generate new session ID
    const fingerprint = await generateFingerprint();
    const timestamp = Date.now();
    // Use first 48 chars of fingerprint + short timestamp to stay under 64 char limit
    const shortTimestamp = timestamp.toString(36); // Base36 is shorter
    const sessionId = `${fingerprint.substring(0, 48)}-${shortTimestamp}`;

    // Store in localStorage
    localStorage.setItem(STORAGE_KEY, sessionId);
    localStorage.setItem(STORAGE_TIMESTAMP_KEY, String(timestamp));

    return sessionId;
  } catch (error) {
    // If localStorage is not available, use in-memory session
    console.warn('localStorage not available, using in-memory session');
    const fingerprint = await generateFingerprint();
    const shortTimestamp = Date.now().toString(36);
    return `${fingerprint.substring(0, 48)}-${shortTimestamp}`;
  }
}

/**
 * Parse user agent to extract device info
 */
export function parseUserAgent(ua: string) {
  const parser = {
    deviceType: 'desktop' as 'mobile' | 'tablet' | 'desktop',
    browser: 'unknown',
    os: 'unknown',
  };

  // Detect device type
  if (/mobile/i.test(ua)) {
    parser.deviceType = 'mobile';
  } else if (/tablet|ipad/i.test(ua)) {
    parser.deviceType = 'tablet';
  }

  // Detect browser
  if (/chrome|chromium|crios/i.test(ua)) {
    parser.browser = 'Chrome';
  } else if (/firefox|fxios/i.test(ua)) {
    parser.browser = 'Firefox';
  } else if (/safari/i.test(ua)) {
    parser.browser = 'Safari';
  } else if (/edg/i.test(ua)) {
    parser.browser = 'Edge';
  } else if (/opr\//i.test(ua)) {
    parser.browser = 'Opera';
  }

  // Detect OS
  if (/windows/i.test(ua)) {
    parser.os = 'Windows';
  } else if (/macintosh|mac os x/i.test(ua)) {
    parser.os = 'macOS';
  } else if (/linux/i.test(ua)) {
    parser.os = 'Linux';
  } else if (/android/i.test(ua)) {
    parser.os = 'Android';
  } else if (/ios|iphone|ipad/i.test(ua)) {
    parser.os = 'iOS';
  }

  return parser;
}
