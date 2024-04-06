import React from 'react';
import Nav from './navabout';
import './Component/N.css';
import Foot from './foot';
import img8 from './Component/8.jpeg';
import img9 from './Component/9.jpeg';
import Props from './props';

function Home() {
  return (
    <div>
        <Nav/>
        
        <div className='m-1'>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
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
        <h1 className='text-secondary m-3'>Trending</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg'
                h='Fastrack'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
           
  
            
            <div className='col-md-3 mb-3'>
              <Props 
                imgsrc='https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg'
                h='ASIAN Men'
                rate='₹599'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg'
                h='Jopasu Car Duster'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg'
                h='HP v236w USB'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg'
                h='Juârez Acoustic Guitar'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg'
                h='Safari Pentagon'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg'
                h='Fastrack'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
           
  
            
            <div className='col-md-3 mb-3'>
              <Props 
                imgsrc='https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg'
                h='ASIAN Men'
                rate='₹599'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg'
                h='Jopasu Car Duster'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg'
                h='HP v236w USB'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg'
                h='Juârez Acoustic Guitar'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg'
                h='Safari Pentagon'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg'
                h='Fastrack'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
           
  
            
            <div className='col-md-3 mb-3'>
              <Props 
                imgsrc='https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg'
                h='ASIAN Men'
                rate='₹599'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg'
                h='Jopasu Car Duster'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg'
                h='HP v236w USB'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg'
                h='Juârez Acoustic Guitar'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg'
                h='Safari Pentagon'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/61LHIxAp1DL._SY695_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51bzah11WpL._SX679_.jpg'
                h='Fastrack'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/51Ibbe7YqQL._SX679_.jpg'
                h='Caprese womens'
                rate='₹5,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
           
  
            
            <div className='col-md-3 mb-3'>
              <Props 
                imgsrc='https://m.media-amazon.com/images/I/61U70iqOAIL._SY695_.jpg'
                h='ASIAN Men'
                rate='₹599'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/41-aBYgAYtL._SX300_SY300_QL70_FMwebp_.jpg'
                h='Jopasu Car Duster'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
              <Props
                imgsrc='https://m.media-amazon.com/images/I/31febYa30qL._SX300_SY300_QL70_FMwebp_.jpg'
                h='HP v236w USB'
                rate='₹499'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/71y1TJbygLL._SX679_.jpg'
                h='Juârez Acoustic Guitar'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
  
            <div className='col-md-3 mb-3'>
            <Props
                imgsrc='https://m.media-amazon.com/images/I/61pVfVON2AL._SX679_.jpg'
                h='Safari Pentagon'
                rate='₹2,999'
                link='https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5'
                btn='Buy Now'
              />
            </div>
          </div>
          
        </div>
      
        <Foot/>
    </div>
  )
}

export default Home;
