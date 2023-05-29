import Banner from '@/components/banner/Banner'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#12141D] text-[#FFFFFF] max-w-[1600px] mx-auto">
      <section className='mx-20 pt-3 md:pt-5'>
        <Navbar></Navbar>
      </section>
      <section className='py-[60px] md:py-[125px]'>
        <Banner></Banner>
      </section>
    </main>
  )
}
