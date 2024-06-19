'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name')
  const email = formData.get('email')

  const message = formData.get('message')

  if (!name || !email || !message) return

  const data = {
    name,
    email,
    message,
  }

  console.log(data)

  try {
    const { data, error } = await resend.emails.send({
      from: 'dr.fermi@fermiguerrero.com',
      to: [email.toString(), 'jfermiguerrero@gmail.com'],
      subject: 'Informes',
      react: EmailTemplate({
        firstName: name.toString(),
        email: email.toString(),
        message: message.toString(),
      }),
      text: '',
    })

    if (error) {
      return error
    }

    return data
  } catch (error) {
    return error
  }
}
