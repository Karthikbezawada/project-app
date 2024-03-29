import React from 'react'
import Nav from './navabout';

function Home() {
  return (
    <div>
        <Nav/>
        {/* <h1>Jai Hanuman</h1> */}
        <div className='m-1'>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    {/* <div class="carousel-item active">
      <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" class="d-block w-100" alt="..."/>
    </div> */}
    {/* <div class="carousel-item">
      <img src='https://dog55574plkkx.cloudfront.net/storelogo/web/flipkart-mob.png'  class="d-block w-100" alt="..."/>
    </div> */}
    {/* <div class="carousel-item">
      <img src="https://cdn2.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1657290/original/Best-Smartphone-Deals-on-Flipkart-Big-Billion-Day-Sale.jpg" class="d-block w-100" alt="..."/>
    </div> */}
    <div class="carousel-item active">
      <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/07/flipkart_big_saving_days_premium_phones_deals.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src='https://assets.mspimages.in/gear/wp-content/uploads/2023/07/Fliipkart-sales-blog.jpeg'  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      
    </div>
  )
}

export default Home
