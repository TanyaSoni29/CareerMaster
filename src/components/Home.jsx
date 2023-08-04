import React from 'react'
import CompanyLogos from './Compnieslogo';
import Start from './Start';
import HowCard from './How';
import steps from '../step';
import Testimonials from './Testimonials';
import datas from '../testimonialData';
import Footer from './Footer';





export default function Home() {
  return (
    <div>
      <Start />
      <CompanyLogos />
     <div className='step-container'>{steps.map((stepTerm) => <HowCard key={stepTerm.step} img={stepTerm.img} heading ={stepTerm.heading} para={stepTerm.para} />)}</div>
     <div className='testimonial-container' style={{backgroundColor:"white", marginTop:"60px"}}>{datas.map((testimonialTerm) => <Testimonials key={testimonialTerm.id} name={testimonialTerm.name} imgURL={testimonialTerm.imgURL} company={testimonialTerm.company} postion={testimonialTerm.postion} message={testimonialTerm.message} />)} </div>
<Footer />
    </div>
  )
}
