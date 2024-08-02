import React from 'react'
import Banner from '../components/header/Banner'
import Section1 from '../components/home/Section1'
import Section2 from '../components/home/Section2'
import FeaturedCars from '../components/home/FeaturedCars'
import GetOffers from '../components/home/GetOffers'
import CarBrands from '../components/carbrands/CarBrands'
import FindTheCars from '../components/home/FindTheCars'
import TopCars from '../components/home/TopCars'


function Home() {
  return (
    <>  <Banner/>
        <Section1/>
        <Section2/>
        <FeaturedCars/>
        <GetOffers/>
        <CarBrands/>
        <FindTheCars/>
        <TopCars/>
        <p>Check On-Road Price banner</p>
        <p>Compare Cars</p>
        <p>Popular Used Cars</p>
        <p>Latest Car Updates Blog</p>

    </>
  )
}

export default Home