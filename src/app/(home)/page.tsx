import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  items-center w-full min-h-screen">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center w-full">
          <div className="relative w-[50%] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] z-10">
            <Image
              src={'/images/profile/dr-fermi.png'}
              alt="Profile"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[50%]"></div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
