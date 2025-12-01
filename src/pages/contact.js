import React from "react";
import "./Contact.css";
import Header from "../components/header";

const Contact = () => {
  return (
    <div className="contact-page">
        <Header/>

        <div className="contact-box">

            {/* LEFT SIDE */}
            <div className="contact-left">
            <h1>Get In Touch</h1>
            <div className="underline"></div>

            <div className="info">
                <p><i className="bi bi-geo-alt-fill"></i> 123 Main street, Mars</p>
                <p><i className="bi bi-envelope-fill"></i> mambo@site.com</p>
                <p><i className="bi bi-telephone-fill"></i> (+255) 9032 - 228 - 12</p>
                <p><i className="bi bi-whatsapp"></i> (+250) 7102 - 339 - 05</p>
                <p><i className="bi bi-instagram"></i> @solutionsbluehorizon</p>
            </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="contact-right">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button className="send-btn">Send Message</button>

            <p className="footer-text">Powered by BlueTech</p>
            </div>

        </div>
        
    </div>
  );
};

export default Contact;
