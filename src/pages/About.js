import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navigation/NavBar'
import React from 'react'

export default function About() {
  return (
    <div>
      <NavBar/>
      <p className='text-red-500 text-center pt-2 ' >About</p>
      <Footer/>
    </div>
  )
}
