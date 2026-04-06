import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, company, message, source } = body

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 })
  }

  const isDemo = source === "demo"
  const subject = isDemo
    ? `[Kinemo] Neue Analyseanfrage von ${company}`
    : `[Kinemo] Neue Kontaktanfrage von ${company}`

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #08415C; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #50C9E1; margin: 0; font-size: 20px;">
          ${isDemo ? "Neue Analyseanfrage" : "Neue Kontaktanfrage"}
        </h1>
        <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">Kinemo Website</p>
      </div>
      <div style="background: #f8f9fa; padding: 32px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Unternehmen</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 600;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">E-Mail</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px;">
              <a href="mailto:${email}" style="color: #08415C;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Telefon</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px;">
              <a href="tel:${phone}" style="color: #08415C;">${phone}</a>
            </td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Nachricht</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; white-space: pre-wrap;">${message}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #e8f4f8; border-radius: 6px; border-left: 4px solid #50C9E1;">
          <p style="margin: 0; font-size: 13px; color: #08415C;">
            Diese Anfrage wurde über das ${isDemo ? "Analyseanfrage-Formular" : "Kontaktformular"} auf kinemo.de gesendet.
          </p>
        </div>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Kinemo Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO ?? "contact@kinemo.de",
      replyTo: email,
      subject,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("SMTP error:", err)
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 })
  }
}
