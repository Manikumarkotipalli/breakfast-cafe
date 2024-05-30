import React from 'react';
import './Style/Help.css'; 

const Help = () => {
  return (
    <div className="help-page">
      <h1>Help & FAQs</h1>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>What are your opening hours?</h3>
          <p>We are open every day from 7:00 AM to 11:00 PM.</p>
        </div>

        <div className="faq-item">
          <h3>Where are you located?</h3>
          <p>We are located at Shilpa Avenue, Miyapur, Hyderabad, 522890.</p>
        </div>

        <div className="faq-item">
          <h3>Do you offer home delivery?</h3>
          <p>Currently, we do not offer home delivery services. We invite you to visit our tiffin center to enjoy our delicious tiffins.</p>
        </div>

        <div className="faq-item">
          <h3>What types of payment do you accept?</h3>
          <p>We accept cash, credit/debit cards, and popular digital wallets such as Google Pay and Paytm.</p>
        </div>

        <div className="faq-item">
          <h3>Can I make a reservation?</h3>
          <p>We operate on a first-come, first-served basis and do not take reservations. However, we strive to serve you promptly and efficiently.</p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any other questions or need further assistance, please don't hesitate to contact us:</p>
        <p>
          Phone: (+91 7893339859)<br />
          Email: (prathapreddy1234@gmail.com)
        </p>
      </div>
    </div>
  );
};

export default Help;
