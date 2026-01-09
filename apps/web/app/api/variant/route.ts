import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/variant
 * Get variant for current page and session
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, pagePath } = body;

    if (!sessionId || !pagePath) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward to backend API
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001';
    const response = await fetch(`${backendUrl}/api/v1/ab-tests/variant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        pagePath,
      }),
    });

    if (!response.ok) {
      throw new Error('Backend request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Variant API error:', error);
    return NextResponse.json(
      { error: 'Failed to get variant' },
      { status: 500 }
    );
  }
}
