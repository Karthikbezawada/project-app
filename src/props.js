// import React from 'react'

// function Props(props) {
//   return (
//     <div>
//       <div className="card">
//               <img src={props.imgsrc}
//             <div className="card-body">
//                 <h5 className="card-title">{props.h}</h5>
//                 {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
//                 {/* <li>128 GB ROM</li>
//                 <li>15.49 cm(6.1 inch)Retina XDR Display</li>
//                 <li>12MP + 12MP | 12MP Front Camera</li>
//                 <li>A15 Bionic Chip, 6 Core Processor</li>
//                 <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li> */}
//                 <h3 className='mt-3'><span>{props.rate}</span></h3>
//                 {/* <a href="https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWAFEQJQ4&marketplace=FLIPKART&q=apple+14&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=8a5b7273-6a5f-409d-90e9-b9113ed8ce1b.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=0cbwdydgf40000001711869318830&qH=aaaa4ee860063d21" target="_blank"  className="btn btn-primary mt-2">BUY NOW</a> */}
//               </div>
              
//         </div>
//     </div>
//   )
// }

// export default Props;

import React from 'react';

function Props(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imgsrc} className="card-img-top imgg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.h}</h5>
          <h3 className='mt-3'><span>{props.rate}</span></h3>
          <a href={props.link} target="_blank" className="btn btn-primary mt-2">{props.btn}</a>
        </div>
      </div>
    </div>
  );
}

export default Props;
