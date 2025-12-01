import "./Home.css"; // make sure you create this file
import Header from "../components/header";
import Footer from "../components/Footer";

function About(){
    return(
        <div className="home-body">
            <Header/>
            <section id="about" class="about" style={{marginTop:'20px'}}>
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

            <div className="slider-container">
                <div className="about-slid">    
                    <div className="about-content"><img src="https://i.pinimg.com/736x/94/5d/83/945d8320b2991e7345ea0dda5ee1b6bb.jpg" /><p>HTML</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/736x/23/4c/b3/234cb3541babe60e78df2030e2ea6da1.jpg" /><p>CSS</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/94/e8/68/94e86891253f0df1155cef04ed1a0f21.jpg" /><p>JavaScript</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/736x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg" /><p>React</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/b8/49/98/b84998c3873218ccad17a3dce959ae39.jpg" /><p>MySql</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/3f/4d/4b/3f4d4b09057fac7d0b003a07731d2e6d.jpg" /><p>MongoDB</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg" /><p>Python</p></div>

                    
                    <div className="about-content"><img src="https://i.pinimg.com/736x/94/5d/83/945d8320b2991e7345ea0dda5ee1b6bb.jpg" /><p>HTML</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/736x/23/4c/b3/234cb3541babe60e78df2030e2ea6da1.jpg" /><p>CSS</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/94/e8/68/94e86891253f0df1155cef04ed1a0f21.jpg" /><p>JavaScript</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/736x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg" /><p>React</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/b8/49/98/b84998c3873218ccad17a3dce959ae39.jpg" /><p>MySql</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/3f/4d/4b/3f4d4b09057fac7d0b003a07731d2e6d.jpg" /><p>MongoDB</p></div>
                    <div className="about-content"><img src="https://i.pinimg.com/1200x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg" /><p>Python</p></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About;