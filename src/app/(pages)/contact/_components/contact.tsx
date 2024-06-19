'use client'

import React, { FormEvent, useState } from 'react'
import { TooltipCom } from '@/components/tooltip-com'
import { Button } from '@/components/ui/button'
import { Mail, MapPin } from 'lucide-react'

import { sendEmail } from '@/actions/send-email'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'

type Props = {}

export const ContactForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const sendEmailAction = async (formData: FormData) => {

    setIsLoading(true)

    try {
      const product = await sendEmail(formData)
      if (product) {
        toast({
          description: 'Your message has been sent.',
        })

        setIsLoading(false)
      } else {
        setIsLoading(false)

        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again"> Try again!</ToastAction>,
        })
      }
    } catch (error) {}
  }

  return (
    <section className="py-6 ">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Let&apos;s talk!</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="font-semibold">
              Prof. José Fermi Guerrero Castellanos
            </p>
            <p className="flex justify-startr items-center gap-5">
              <MapPin />
              <div className="flex flex-col">
                <TooltipCom message="Facultad de ciencias de la electrónica">
                  <span className="font-semibold">FCE</span>
                </TooltipCom>
                <TooltipCom message="Benemerita universidad autonoma de Puebla">
                  <span className="font-semibold">BUAP </span>
                </TooltipCom>

                <span>Av. San Claudio y 18 Sur Col. San Manuel</span>
                <span>Puebla México, C.P. 72450</span>
                <span>Oficina: FCE-307</span>
              </div>
            </p>
            {/* <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p> */}
            <p className="flex justify-startr items-center gap-5">
              <Mail />

              <span>fermi.guerrero@correo.buap.mx</span>
            </p>
          </div>
        </div>
        <form
          // novalidate=""
          action={sendEmailAction}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="name"
              placeholder="José Fermi Guerrero Castellanos"
              className="block w-full rounded-md bg-foreground/10 shadow-sm focus:ring focus:ri focus:ri p-2"
            />
            <div
              data-lastpass-icon-root=""
              style={{
                position: 'relative',
                height: '0px',
                width: '0px',
                float: 'left',
              }}
            ></div>
          </label>
          <label className="block">
            <span className="mb-2">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="fermi@gmail.com"
              className="block w-full rounded-md bg-foreground/10 shadow-sm focus:ring focus:ri focus:ri p-2"
            />
          </label>
          <label className="block">
            <span className="mb-2">Message</span>
            <textarea
              name="message"
              rows={3}
              className="block w-full rounded-md bg-foreground/10 focus:ring focus:ri focus:ri p-2"
            ></textarea>
          </label>
          <Button
            type="submit"
            className={cn(isLoading && 'bg-red-300')}
            disabled={isLoading}
          >
            {' '}
            {isLoading ? 'Loading...' : 'Submit'}
          </Button>
        </form>
      </div>
    </section>
  )
}
