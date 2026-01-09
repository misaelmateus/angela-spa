import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/track/session
 * Create a new session
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('[Session API] Received body:', JSON.stringify(body));

    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Forward to backend API
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001';
    console.log('[Session API] Forwarding to:', `${backendUrl}/api/v1/analytics/session`);

    const payload = {
      ...body,
      ipAddress: ip,
    };
    console.log('[Session API] Payload:', JSON.stringify(payload));

    const response = await fetch(`${backendUrl}/api/v1/analytics/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': ip,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend response:', response.status, errorText);
      throw new Error(`Backend request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Session API error:', error);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    );
  }
}
