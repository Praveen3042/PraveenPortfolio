import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (

    <div className='contactmain'>
      <div className='contactmain1'>
        <h1>Contact</h1>
        <br />

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="contact-input contact-input-name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="contact-input contact-input-email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />  &nbsp;
          <input
            type="text"
            name="phone"
            className="contact-input contact-input-phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            className="contact-textarea"
            rows="5"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <input
            type="submit"
            className="contact-submit"
            value="Submit"
          />
        </form>
        
      </div>



    </div>

  );
};

export default Contact