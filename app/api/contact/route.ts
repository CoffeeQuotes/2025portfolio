import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailUser = process.env.NEXT_EMAIL_GMAIL_USER
const emailPass = process.env.NEXT_EMAIL_GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send to yourself
      subject: `Portfolio Contact Form: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
} 