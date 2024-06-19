import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>
      Welcome, {firstName}! your email is: {email}
    </h1>
    <p>{message}</p>
  </div>
)
