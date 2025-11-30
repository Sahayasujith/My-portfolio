import React from "react";
import "./Home.css"; // make sure you create this file
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-body">
      <Header/>
      <section id="home" className="home">
        <img
          src="/SUJITH.jpg"
          alt="profile"
          width="450px"
          height="400px"
        />

        <div className="description">
              <h1>
              Hi I'm <br /> <span>Sahaya Sujith</span>
              </h1>

              <h2>
              I'm a <span> Web developer...</span>
              </h2>

              <p>
              I'm a Full-Stack Developer passionate about creating beautiful and
              user-friendly web experiences. I'm eager to learn new technologies.
              </p>

              <div className="font">
              <a href="https://www.instagram.com/sujith___.s/">
                  <i className="bi bi-instagram"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61576363892117">
                  <i className="bi bi-facebook"></i>
              </a>

              <a href="https://www.linkedin.com/in/sahaya-sujith-s/">
                  <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://github.com/Sahayasujith">
                  <i className="bi bi-github"></i>
              </a>
              </div>

              <button className="cv-btn">
                  <a href="/Sahaya Sujith S.docx" download >
                      Download CV
                  </a>
              </button>
        </div>
      </section>

      {/* about sections */}

      <section id="about" class="about">
        <div class="about_section">
            <h1>About <span>Me</span></h1>
            <h2>Web <span>Developer!</span></h2>
            <p>I'm Sahayasujith Full-Stack Developer, I enjoy taking complex problem and turning them into simple and beautiful interface design. I also love the logic and structure of coding and always strive to write elegent and efficent code whether it be HTML,CSS or JavaScript.</p><br/>
            <button class="about_btn" onclick="aboutmark()">Read More...</button>
        </div>
        <div class="about_photo">
            <img src="SUJITH.jpg" alt="image" width="420px" height="360px"/>
        </div>
      </section>

      {/* service sections */}

      <section id="services" class="service">
        <h2 class="service_section">My <span>Services</span></h2>
        <div class="card">
            <div class="service_card">
                <i class="bi bi-laptop"></i>
                <h2>Full-Stack Developer</h2>
                <p>The art of composing visual elements is such as typography, images, colors, and shapes in to communicate information or convey a message effectively.</p>
                <a href="#">Read More..</a>
            </div>

            <div class="service_card">
                <i class="bi bi-cpu"></i>
                <h2>UI/UX Design</h2>
                <p>User Interface (UI) and User Experience (UX) Design play key roles in the experience users have when interacting with digital products and applications.</p>
                <a href="#">Read More..</a>
            </div>

            <div class="service_card">
                <i class="bi bi-tv"></i>
                <h2>Frond-end Developer</h2>
                <p>Front-end Development is the development or creation of a user interface using some markup languages and other tools. It is the development of the user side where only user interaction will be counted.</p>
                <a href="#">Read More..</a>
            </div>
        </div>
      </section>

      <section id="contact">
        <div className="form">
          <h1>
            Contact <span>Me</span>
          </h1>

          <form action="#home">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              required
            />

            <textarea
              name="msg"
              rows="6"
              placeholder="Enter your message"
            ></textarea>

            <button type="submit" className="form_btn">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
