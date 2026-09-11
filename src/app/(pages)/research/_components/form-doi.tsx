'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Server } from 'lucide-react'
import { useState } from 'react'
import { CitationPub } from './citation-pub'
import { Separator } from '@/components/ui/separator'

const DOI_REGEX = /^10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i

const formSchema = z.object({
  doi: z
    .string()
    .trim()
    .min(7, {
      message: 'DOI must be at least 7 characters.',
    })
    .regex(DOI_REGEX, {
      message: 'Enter a valid DOI, e.g. 10.1109/ACCESS.2020.3002845',
    }),
})

export function DoiForm() {
  const [doi, setDoi] = useState<z.infer<typeof formSchema>>({ doi: '' })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doi: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    setDoi(values)
  }

  return (
    <div className="w-full  mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="doi"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="0000000/000000000000"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {doi.doi === '' ? (
            <Button type="submit" className="w-full sm:w-auto">
              Buscar
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button type="submit" className="w-full sm:w-auto">
                Buscar
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => {
                  setDoi({ doi: '' })
                  form.reset()
                }}
              >
                Limpiar
              </Button>
            </div>
          )}
        </form>
      </Form>
      <Separator className="my-6" />

      {doi?.doi !== '' && <CitationPub doi={doi.doi} />}
      <Separator className="my-6" />
    </div>
  )
}
