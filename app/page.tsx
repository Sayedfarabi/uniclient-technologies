import Banner from '@/components/banner/Banner'
import CustomerPayingSection from '@/components/customer-paying-section/CustomerPayingSection'
import FooterSection from '@/components/footer-section/FooterSection'
import GetStartedSection from '@/components/get-started-section/GetStartedSection'
import ImproveSection from '@/components/improve-section/ImproveSection'
import MakeDecisionSection from '@/components/make-decision-section/MakeDecisionSection'
import MixlandHelpsSection from '@/components/mixland-helps-section/MixlandHelpsSection'
import Navbar from '@/components/navbar/Navbar'
import TestimonialSection from '@/components/testimonial-section/TestimonialSection'
import WritingToolsSection from '@/components/writing-tools-section/WritingToolsSection'


export default function Home() {
  return (
    <main className="min-h-screen bg-[#12141D] text-[#FFFFFF] max-w-[1600px] mx-auto">

      <section className='pt-3 md:pt-5 mx-20'>
        <Navbar></Navbar>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <Banner></Banner>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <CustomerPayingSection></CustomerPayingSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <GetStartedSection></GetStartedSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <WritingToolsSection></WritingToolsSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <MixlandHelpsSection></MixlandHelpsSection>
      </section>
      <section className='testimonial'>
        <TestimonialSection></TestimonialSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <MakeDecisionSection></MakeDecisionSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <ImproveSection></ImproveSection>
      </section>
      <section className='pt-3 md:pt-5 mx-20'>
        <FooterSection></FooterSection>
      </section>

    </main>
  )
}
