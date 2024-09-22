'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Copy, Server } from 'lucide-react'
import { useState } from 'react'
import { DoiForm } from './form-doi'
type Props = {}

export const SearchByDoi = (props: Props) => {
  const [doi, setDoi] = useState<string>('')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-row items-center justify-between gap-2 cursor-pointer">
          <Server className="sm:mt-4  size-10" />
          <p className="sm:hidden text-sm">Search by DOI</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[80vw] sm:max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle>Search publication</DialogTitle>
          <DialogDescription>
            Write only the DOI of the desire pub.
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="doi"
              defaultValue="0000000/000000000000"
              name='doi'
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <Server className="mt-4" />

            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" /> 
          </Button>
        </div> */}
        <DoiForm />
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
