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

const formSchema = z.object({
  doi: z.string().min(3, {
    message: 'Doi must be at least 10 characters.',
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
          {doi.doi === '' && (
            <Button type="submit" className="w-full sm:w-auto">
              Buscar
            </Button>
          )}
        </form>
      </Form>
      <Separator className="my-6" />

      {doi?.doi !== '' && <CitationPub doi={doi.doi} />}
      <Separator className="my-6" />
    </div>
  )
}
