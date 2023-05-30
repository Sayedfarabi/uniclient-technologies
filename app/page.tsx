import Banner from '@/components/banner/Banner'
import CustomerPayingSection from '@/components/customer-paying-section/CustomerPayingSection'
import GetStartedSection from '@/components/get-started-section/GetStartedSection'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#12141D] text-[#FFFFFF] max-w-[1600px] mx-auto">
      <section className='mx-20 pt-3 md:pt-5'>
        <Navbar></Navbar>
      </section>
      <section className='mx-20 pt-3 md:pt-5'>
        <Banner></Banner>
      </section>
      <section className='mx-20 pt-3 md:pt-5'>
        <CustomerPayingSection></CustomerPayingSection>
      </section>
      <section className='mx-20 pt-3 md:pt-5'>
        <GetStartedSection></GetStartedSection>
      </section>
    </main>
  )
}
