import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/variant/assign
 * Record variant assignment for a session
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, testId, variantId } = body;

    if (!sessionId || !testId || !variantId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward to backend API
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001';
    const response = await fetch(`${backendUrl}/api/v1/ab-tests/assign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        testId,
        variantId,
      }),
    });

    if (!response.ok) {
      throw new Error('Backend request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Variant assignment API error:', error);
    return NextResponse.json(
      { error: 'Failed to assign variant' },
      { status: 500 }
    );
  }
}
