'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(5000),
})

const OWNER_EMAIL = 'jfermiguerrero@gmail.com'
const FROM_EMAIL = 'dr.fermi@fermiguerrero.com'

export const sendEmail = async (formData: FormData) => {
  const parsed = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    throw new Error('Invalid form data. Please check all fields.')
  }

  const { name, email, message } = parsed.data

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      reply_to: email,
      subject: 'Informes',
      react: EmailTemplate({
        firstName: name,
        email,
        message,
      }),
      text: `${name} <${email}>:\n\n${message}`,
    })

    if (error) {
      throw new Error(error.message || 'Failed to send email.')
    }

    return { success: true, id: data?.id }
  } catch (error) {
    if (error instanceof Error) throw error
    throw new Error('Failed to send email.')
  }
}
