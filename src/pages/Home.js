import React from 'react'
import Cards from '../components/Cards'
import UncontrolledExample from '../components/Carousal'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className='bg-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(246,6,6,1) 100%)'>
        <div><NavBar /></div>
        <div><UncontrolledExample /></div>
        <div><Cards/></div>
        <div><Footer/></div>
    </div>
  )
}
