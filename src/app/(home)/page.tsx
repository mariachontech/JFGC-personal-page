import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="flex  items-center w-full min-h-screen">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center w-full">Home</div>
        <ModeToggle />
      </MaxWidthWrapper>
    </main>
  )
}
