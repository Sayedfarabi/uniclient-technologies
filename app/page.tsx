import Banner from '@/components/banner/Banner'
import CustomerPayingSection from '@/components/customer-paying-section/CustomerPayingSection'
import GetStartedSection from '@/components/get-started-section/GetStartedSection'
import MakeDecisionSection from '@/components/make-decision-section/MakeDecisionSection'
import MixlandHelpsSection from '@/components/mixland-helps-section/MixlandHelpsSection'
import Navbar from '@/components/navbar/Navbar'
import TestimonialSection from '@/components/testimonial-section/TestimonialSection'
import WritingToolsSection from '@/components/writing-tools-section/WritingToolsSection'
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
      <section className='mx-20 pt-3 md:pt-5'>
        <WritingToolsSection></WritingToolsSection>
      </section>
      <section className='mx-20 pt-3 md:pt-5'>
        <MixlandHelpsSection></MixlandHelpsSection>
      </section>
      <section className='testimonial'>
        <TestimonialSection></TestimonialSection>
      </section>
      <section className='mx-20 pt-3 md:pt-5'>
        <MakeDecisionSection></MakeDecisionSection>
      </section>
    </main>
  )
}
