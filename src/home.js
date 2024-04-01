// import React from 'react'
// import Nav from './navabout';
// import './Component/N.css';
// import Foot from './foot'
// import img8 from './Component/8.jpeg';
// import img9 from './Component/9.jpeg';

// function Home() {
//   return (
//     <div>
//         <Nav/>
//         {/* <h1>Jai Hanuman</h1> */}
//         <div className='m-1'>
//         <div id="carouselExample" class="carousel slide">
//   <div class="carousel-inner">
//     {/* <div class="carousel-item active">
//       <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" class="d-block w-100" alt="..."/>
//     </div> */}
//     {/* <div class="carousel-item">
//       <img src='https://dog55574plkkx.cloudfront.net/storelogo/web/flipkart-mob.png'  class="d-block w-100" alt="..."/>
//     </div> */}
//     {/* <div class="carousel-item">
//       <img src="https://cdn2.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1657290/original/Best-Smartphone-Deals-on-Flipkart-Big-Billion-Day-Sale.jpg" class="d-block w-100" alt="..."/>
//     </div> */}
//     <div class="carousel-item active">
//       <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/07/flipkart_big_saving_days_premium_phones_deals.png" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src='https://assets.mspimages.in/gear/wp-content/uploads/2023/07/Fliipkart-sales-blog.jpeg'  class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// <div>
// <iframe className='mt-1' width="100%" height="515" src="https://www.youtube.com/embed/IY4x85zqoJM?si=cOcVuXHVKU1vs1CP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
//         </div>
//         {/* <img className='w-100' src={img8} alt="Image 1" /> */}
//         {/* <img className='w-100' src={img9} alt="Image 1" /> */}
//         {
          
//         }
//         <Foot/>
//       {/* <footer className='bg-success m-auto text-center foot w-100  p-3'>
//         <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><FaFacebookF />FaceBook</span></a>
//         <a className='aa' target="_blank" href='https://www.instagram.com/flipkart/?hl=en'><span><FaInstagram />Instagram</span></a>
//         <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><IoMdGlobe />Website</span></a>
//         <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><BsTwitterX /> X</span></a>
//       </footer> */}
//     </div>
//   )
// }

// export default Home
import React from 'react';
import Nav from './navabout';
import './Component/N.css';
import Foot from './foot';
import img8 from './Component/8.jpeg';
import img9 from './Component/9.jpeg';

function Home() {
  return (
    <div>
        <Nav/>
        {/* <h1>Jai Hanuman</h1> */}
        <div className='m-1'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" className="d-block w-100" alt="..."/>
            </div> */}
            {/* <div className="carousel-item">
              <img src='https://dog55574plkkx.cloudfront.net/storelogo/web/flipkart-mob.png'  className="d-block w-100" alt="..."/>
            </div> */}
            {/* <div className="carousel-item">
              <img src="https://cdn2.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1657290/original/Best-Smartphone-Deals-on-Flipkart-Big-Billion-Day-Sale.jpg" className="d-block w-100" alt="..."/>
            </div> */}
            <div className="carousel-item active">
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/07/flipkart_big_saving_days_premium_phones_deals.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src='https://assets.mspimages.in/gear/wp-content/uploads/2023/07/Fliipkart-sales-blog.jpeg'  className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/flipkart-big-billion-days-best-deals-premium-smartphones.png" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        </div>
        {/* <img className='w-100' src={img8} alt="Image 1" /> */}
        {/* <img className='w-100' src={img9} alt="Image 1" /> */}
        <h1 className='text-secondary m-3'>Trending</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Caprese womens</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹5,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fastrack</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹1,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">OnePlus </h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹2,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ASIAN Men's </h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹599</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jopasu Car Duster</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹499</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HP v236w USB</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹499</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Juârez Acoustic Guitar</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹2,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Safari Pentagon</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹1,799</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Caprese womens</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹5,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fastrack</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹1,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">OnePlus </h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹2,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ASIAN Men's </h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹599</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jopasu Car Duster</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹499</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">HP v236w USB</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>12MP + 12MP | 12MP Front Camera</li>
                    <li>A15 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹499</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Juârez Acoustic Guitar</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹2,999</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
  
            <div className='col-md-3 mb-3'>
              <div className="card">
                <img src="https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg" className="card-img-top imgg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Safari Pentagon</h5>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  {/* <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                    <li>48MP + 12MP | 12MP Front Camera</li>
                    <li>A16 Bionic Chip, 6 Core Processor</li>
                    <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                  </ul> */}
                  <h3 className='mt-3'><span>₹1,799</span></h3>
                  <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        {/* <div className='col-md-'>
          <iframe className='mt-1' width="50%" height="515" src="https://www.youtube.com/embed/IY4x85zqoJM?si=cOcVuXHVKU1vs1CP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div> */}
        <Foot/>
      {/* <footer className='bg-success m-auto text-center foot w-100  p-3'>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><FaFacebookF />FaceBook</span></a>
        <a className='aa' target="_blank" href='https://www.instagram.com/flipkart/?hl=en'><span><FaInstagram />Instagram</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><IoMdGlobe />Website</span></a>
        <a className='aa' target="_blank" href='https://www.facebook.com/flipkart/'><span><BsTwitterX /> X</span></a>
      </footer> */}
    </div>
  )
}

export default Home;
