import "./about.css";
import Award from "../../img/certfication.jpg";

import Progress from "./Progress";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          {/* <img src={figmaDesign} alt="" className="a-img" /> */}
          <Progress skill="Web Development" done="90" />
          <Progress skill="AI Prompt Engineer" done="80" />
          <Progress skill="Drupal" done="90" />
          <Progress skill="Design" done="85" />
          <Progress skill="Database" done="85" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          As a web developer at the University of Colorado Denver specializing
          in Drupal and React, I bring a wealth of experience from my previous
          role as an IT Professional. My enthusiasm for continuous learning
          extends to all things technology, with a particular focus on web
          technologies. Crafting websites and web applications is not just a job
          for me; it's a passion. I take pride in the knowledge that my work
          contributes to making a positive impact and helps people in meaningful
          ways.
        </p>
        <p className="a-desc">
          Six years ago, my journey into web development began during my tenure
          with the Department of Anesthesiology at the University of Colorado
          Denver. In my role as an IT professional, I took on the responsibility
          of developing both intranet and public-facing websites, along with a
          variety of web applications for the department. Presently, my
          expertise is centered on the MERN stack, reflecting my commitment to
          staying at the forefront of modern web development technologies.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certifications</h4>
            <p className="a-award-desc">Contact me below to see my CV.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
