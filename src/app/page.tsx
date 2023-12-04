import HeroPage from './components/hero'
import GlassmorpWarpper from './components/glassmorp-warper'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="w-screen min-h-screen">
        <HeroPage />
      <div className='relative w-screen h-auto flex flex-col items-center justify-start space-y-5'>
        <Image src={'/assets/shape-combine.svg'} alt="shape-combined" width={600} height={600} className='absolute left-0 -top-28'/>
        <GlassmorpWarpper className="p-20">
          <p>eki</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nostrum error explicabo voluptates totam exercitationem distinctio, ducimus blanditiis inventore. Eum hic laboriosam, quae aliquid id consequatur accusantium quod beatae maxime!</p>
        </GlassmorpWarpper>
        <GlassmorpWarpper className="p-5">
          <p>eki</p>
        </GlassmorpWarpper>
      </div>
    </main>
  )
}
