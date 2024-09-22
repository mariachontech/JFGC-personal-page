import { Loader2 } from 'lucide-react'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader2 className="animate-spin" />
    </div>
  )
}
