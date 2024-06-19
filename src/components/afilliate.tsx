'use client'

// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { AffiliateBtn } from './affiliate-btn'
import Link from 'next/link'

export function Affiliate() {
  return (
    <Link href={'/contact'}>
      <AffiliateBtn />
    </Link>

    // <Dialog>
    //   <DialogTrigger asChild>
    //     <AffiliateBtn />
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[425px]">
    //     <DialogHeader>
    //       <DialogTitle>Affiliate</DialogTitle>
    //       <DialogDescription>Join us to our team</DialogDescription>
    //     </DialogHeader>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="name" className="text-right">
    //           Name
    //         </Label>
    //         <Input
    //           id="name"
    //           name="name"
    //           defaultValue="John Connors"
    //           className="col-span-3"
    //         />
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="email" className="text-right">
    //           Email
    //         </Label>
    //         <Input
    //           id="email"
    //           type="email"
    //           name="email"
    //           defaultValue="johnconnors@mydomain.com"
    //           className="col-span-3"
    //         />
    //       </div>
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit">Send</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  )
}
