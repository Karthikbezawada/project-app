import React from 'react';
import Navbar from './navabout';
import './Component/N.css';
import Foot from './foot';

function Products() {
  return (
    <div className='bgg'>
      <Navbar />
      <h1 className=' text-center text-success my-5'></h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apple iPhone 14</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>12MP + 12MP | 12MP Front Camera</li>
                <li>A15 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹54,999</span></h3>
                <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank"  className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/71bErtQPC3L._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apple iPhone 15 Plus</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>17.02 cm(6.7 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹80,968</span></h3>
                <a href="https://www.flipkart.com/apple-iphone-15-plus-blue-128-gb/p/itm4022c14383050?pid=MOBGTAGPE4F2HAW7&lid=LSTMOBGTAGPE4F2HAW7NDYSPY&marketplace=FLIPKART&q=apple+15+plus&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_3_10_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_10_na_na_ps&fm=search-autosuggest&iid=9890b1ee-56aa-466b-bc1a-391707b5ceba.MOBGTAGPE4F2HAW7.SEARCH&ppt=sp&ppn=sp&ssid=a6ncvwoqgw0000001711869458144&qH=d5d85ae18b9e31a7" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/71ZP6U9sWTL._SL1500_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apple iPhone 15</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹69,999</span></h3>
                <a href="https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Apple iPhone 15 Pro</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A17 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹1,48,870</span></h3>
                <a href="https://www.flipkart.com/apple-iphone-15-pro-max-black-titanium-256-gb/p/itmd170cfc1dec9e?pid=MOBGTAGQGJWQFEFX&lid=LSTMOBGTAGQGJWQFEFXBVNGR1&marketplace=FLIPKART&q=apple+15+pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=c90fb911-99f7-4f2b-bb64-87651960b2a7.MOBGTAGQGJWQFEFX.SEARCH&ppt=sp&ppn=sp&ssid=k6rlyxr4hc0000001711868924008&qH=68a5ca1d624e492e" target="_blank" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/71CXhVhpM0L._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Samsung Galaxy S24 Ultra 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>12 GB RAM |128 GB ROM</li>
                <li>17.27 cm(6.8 inch)Retina XDR Display</li>
                <li>200MP + 50MP | 12MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹1,54,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Samsung Galaxy Z Flip5 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>8 GB RAM |128 GB ROM</li>
                <li>17.02 cm(6.7 inch)Retina XDR Display</li>
                <li>12MP + 50MP | 12MP Front Camera</li>
                <li>3700 mAh Battery</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹89,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/61AplC-qoML._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">OnePlus 12</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <li>12GB RAM | 256GB ROM</li>
                <li>17.32 cm(6.82 inch)Retina XDR Display</li>
                <li>64MP Rear Camera</li>
                <li>5400 mAh Battery</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹44,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/61+s+yrWo-L._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Samsung Galaxy Z Fold</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>17.02 cm(6.7 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹74,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/71MsYJjQhBL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Xiaomi 14 </h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹56,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Redmi 13C</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A17 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹24,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/712pLRfzDYL._SL1200_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">iQOO Neo 7 Pro 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>12 GB RAM |128 GB ROM</li>
                <li>17.27 cm(6.8 inch)Retina XDR Display</li>
                <li>200MP + 50MP | 12MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹24,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/41snmTn9mrL._SX300_SY300_QL70_FMwebp_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Realme narzo 60 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>8 GB RAM |128 GB ROM</li>
                <li>17.02 cm(6.7 inch)Retina XDR Display</li>
                <li>12MP + 50MP | 12MP Front Camera</li>
                <li>3700 mAh Battery</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹19,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/51X1axWGFZL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">POCO M6 Pro 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>12MP + 12MP | 12MP Front Camera</li>
                <li>A15 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹22,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/715iHuJXgVL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Redmi Note 11S</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>17.02 cm(6.7 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹16,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3'>
            <div className="card">
              <img src="https://m.media-amazon.com/images/I/81ZhcsXgKtL._SX679_.jpg" className="card-img-top imgg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Samsung Galaxy M14 5G</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <li>128 GB ROM</li>
                <li>15.49 cm(6.1 inch)Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor</li>
                <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
                <h3 className='mt-3'><span>₹24,999</span></h3>
                <a href="#" className="btn btn-primary mt-2">BUY NOW</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Foot/>
    </div>
  );
}

export default Products;
