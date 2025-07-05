import React from 'react'
import HeroBanner from './hero-banner'
import CategoryAccessBanner from './category-access-banners'
import Advertiestment from './advertistment'
import HomeProductList from './products'
import MiddleBanner from './middle-banner'
import FollowUsOnInstergram from './follow-us'

function HomePage() {
  return (
    <div>
      <div><HeroBanner /></div>
      <div className='p-10'>
        <div className=''><CategoryAccessBanner /></div> 
        <div><Advertiestment /></div>
        <div ><HomeProductList /></div>
      </div>
      {/* middle banner */}
      <div>
        <MiddleBanner />
      </div>
      <div className='p-10'><FollowUsOnInstergram /></div>
    </div>
  )
}

export default HomePage