import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <h1>Fermi&apos;s Page</h1>
      <ModeToggle />
    </main>
  )
}
