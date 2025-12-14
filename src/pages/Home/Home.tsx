import React from 'react'
import Navigation from '@components/modules/Navigation/Navigation'
import Hero from '@components/templates/home/Hero/Hero'
import Features from '@components/templates/home/Features/Features'


const Home:React.FC = ()=>{
  return (
    <>
    <Navigation/>
    <Hero/>
    <Features/>
    </>
  )
}

export default Home