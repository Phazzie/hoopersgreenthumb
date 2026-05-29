import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, address, service, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const emailText = `
New quote request from Hooper's Green Thumb website:

Name:    ${name}
Email:   ${email}
Phone:   ${phone    || 'Not provided'}
Address: ${address  || 'Not provided'}
Service: ${service  || 'Not specified'}

Message:
${message || 'No additional message.'}
    `.trim()

    // ── Option A: Resend (recommended) ──────────────────────────────────────
    // 1. Sign up free at resend.com
    // 2. Add RESEND_API_KEY to your Vercel environment variables
    // 3. Verify your domain (hoopersgreenthumb.com) in Resend
    // ────────────────────────────────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Hooper's Green Thumb <noreply@hoopersgreenthumb.com>",
          to:   'thomas@hoopersgreenthumb.com',
          reply_to: email,
          subject: `New Quote Request from ${name}`,
          text: emailText,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    // ── Option B: No API key yet — log and succeed ───────────────────────────
    // Remove this once RESEND_API_KEY is configured
    console.log('📬 Quote request received (no email sent — add RESEND_API_KEY):', body)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
