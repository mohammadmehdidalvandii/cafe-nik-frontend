import React from 'react'
import Navigation from '@components/modules/Navigation/Navigation'
import Hero from '@components/templates/home/Hero/Hero'
import Features from '@components/templates/home/Features/Features'
import MenuHome from '@components/templates/home/MenuHome/MenuHome'
import BranchesPreview from '@components/templates/home/BranchesPreview/BranchesPreview'


const Home:React.FC = ()=>{
  return (
    <>
    <Navigation/>
    <Hero/>
    <Features/>
    <MenuHome/>
    <BranchesPreview/>
    </>
  )
}

export default Home