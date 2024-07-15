import React from 'react';
import Layout from '../components/Layout';
import './Contact.css';
import FacebookIcon from '../assets/icons/facebook-link.webp';
import InstagramIcon from '../assets/icons/insta-icon.webp';
import GmailIcon from '../assets/icons/gmail-icon.webp';
import LocationIcon from '../assets/icons/loc-icon.webp';
import WebsiteIcon from '../assets/icons/link-icon.webp';
import FeedbackIcon from '../assets/icons/feedback-icon.webp';

const Contact = () => {
    return (
        <Layout backgroundImage={require('../assets/intros/contact-pic.webp')}>
        <div className="contact-container">
        <h1>Here are some ways to stay in touch!</h1>
        <p>Connect with us on social media, visit our department's website for more information about Penn Linguistics, and share your feedback on our events to help us improve.</p>
    
    <div className="social-links">
    <a href="https://www.facebook.com/groups/PennLing/?fref=nf" target="_blank" rel="noopener noreferrer" className="social-link">
      <img loading='lazy' src={FacebookIcon} alt="Facebook" />
      <span>Facebook</span>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
      <img loading='lazy' src={InstagramIcon} alt="Instagram" />
      <span>Instagram</span>
    </a>
    <a href="mailto:plingupenn@gmail.com" className="social-link">
      <img loading='lazy' src={GmailIcon} alt="Gmail" />
      <span>Gmail</span>
    </a>
    <a href="https://maps.app.goo.gl/8FbZqunCz3qsCf15A" target="_blank" rel="noopener noreferrer" className="social-link">
      <img loading='lazy' src={LocationIcon} alt="Location" />
      <span>Find Us</span>
    </a>
    <a href="https://www.ling.upenn.edu/" target="_blank" rel="noopener noreferrer" className="social-link">
      <img loading='lazy' src={WebsiteIcon} alt="Departmental Website" />
      <span>Faculty</span>
    </a>
    <a href="https://forms.gle/PHs8C6kzjitXtkBx5" target="_blank" rel="noopener noreferrer" className="social-link">
      <img loading='lazy' src={FeedbackIcon} alt="Feedback Form" />
      <span>Feedback</span>
    </a>
  </div>

  <p>{'\u2764'} what we do? Join the party!</p>

  {/* Membership Button */}
  <a href="https://forms.gle/9oaWfkkYMZ4k6yFh6" className="apply-button">Sign Up for Membership</a>
</div>
</Layout>
    );
};

export default Contact;