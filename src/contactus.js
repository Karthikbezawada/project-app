import React from 'react'
import Navbar from './navbar';
import Card from './Component/Card'
import imgg from './Component/photo.webp'



const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <Card
        imgSrc={imgg}
        imgAlt="Card Image"
        title="RRR"
        // link="https://www.shriramtemple.org.in/donate-now" 
        link="https://github.com/Karthikbezawada"

        description="Ram Mandir Hindu temple built in Ayodhya India on the site of the Babri Masjid symbolizing cultural and religious significance"
      />
      </div>
  )
}

export default ContactUs