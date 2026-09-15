import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/send-email'
import { contactEmailTemplate } from '@/lib/email/templates/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    } = body

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 },
      )
    }

    const template = contactEmailTemplate({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    })

    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: `New Contact Enquiry: ${subject}`,
      template,
      replyTo: email,
    })

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully.',
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}