/*
Created by Joseph Doros
jd3545@rit.edu

Description: Home page built with the components
*/

import React from 'react'
import Announcement from '../components/Announcement.jsx'
import Categories from '../components/Categories.jsx'
import Footer from '../components/Footer.jsx'
import Navagation from '../components/Navagation.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Products from '../components/Products.jsx'
import Slider from '../components/Slider.jsx'

const Home = () => {
  return (
    <div className='container'>
      <Announcement />
      <Navagation />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home