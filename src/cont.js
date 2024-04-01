import React, { useState } from 'react';
import Nav from './navabout';
import Foot from './foot';
// import './ContactUs.css'; // Import your CSS file for additional styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert("Thank You We Will Get Back To You!!!");
  };

  return (
    <div>
      <Nav/>
      <div className='contact-container'>
        <h1 className='contact-heading my-5 text-center'>Contact Us</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group m-5'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='form-group m-5'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='form-group m-5'>
            <label>Number:</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='form-group m-5'>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='form-group m-5'>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='form-control'
              required
            ></textarea>
          </div>
          <button className='btn btn-primary m-4 ml-4' onClick={handleSubmit} type="submit">Submit</button>
        </form>
      </div>
      <Foot/>
    </div>
  );
};

export default ContactUs;
