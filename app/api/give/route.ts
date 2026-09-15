import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/send-email'
import { givingEmailTemplate } from '@/lib/email/templates/giving'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      givingType,
      amount,
      firstName,
      lastName,
      email,
      phone,
    } = body

    if (!givingType || !amount || !firstName || !lastName || !email ) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 },
      )
    }

    const template = givingEmailTemplate({
      givingType,
      amount,
      firstName,
      lastName,
      email,
      phone,
    })

    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: `New Giving Submission: ${givingType}`,
      template,
      replyTo: email,
    })

    return NextResponse.json({
      success: true,
      message: 'Your giving information has been submitted successfully.',
    })
  } catch (error) {
    console.error('Give API error:', error)

    return NextResponse.json(
      {
        error: 'Unable to process your submission. Please try again later.',
      },
      { status: 500 },
    )
  }
}