import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import img1 from '../../assets/img/Kandhablack.jpeg';
import experience from '../../assets/img/experience.png';
import  education from '../../assets/img/education.png';


export default function AboutMe() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <section id="AboutMe" className="about--section">
      <div
        className="about--section--img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img src={img1} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Get To Know More</p>
          <h1 className="skills-section--heading">About Me</h1>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src={education}
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  B.E. Bachelors Degree
                  <br />
                  Mechanical
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                Hello, I'm Kandhasamy, a proactive and passionate Mechanical Engineering graduate with a strong inclination
                towards innovative problem-solving and a deep interest in computer skills and web development.
                Although my background is in engineering, my true enthusiasm lies in the world of technology.
                I am eager to leverage my technical skills and quick learning ability to excel in computer-related fields.
                As a team player and a dedicated learner,
                I'm committed to continuously improving my expertise in technology and contributing to advancements in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
