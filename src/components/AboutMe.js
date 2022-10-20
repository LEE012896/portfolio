import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="about-me"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/paper.jpg"})`,
        backgroundSize: "cover",
      }}
    >
      <h4 style={{ color: "#023047" }}>/about_me</h4>
      <div className="profile-picture">
        <img
          src={process.env.PUBLIC_URL + "/images/ethan_photo.png"}
          alt="profile"
        />
      </div>
      <div id="about-me-code">
        <header id="about-me-header">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </header>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {<span id="console-log">Ethan.homeBase</span>}
            {")"}
          </p>
          <p className="about-me-response">{<span>"Queens, NY"</span>}</p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.log("}
            {
              <span id="console-log" style={{ color: "#e4e8ed" }}>
                Ethan.bio
              </span>
            }
            {")"}
          </p>
          <p className="about-me-response">
            {
              <>
                <span id="bio">
                  "Hi, I'm Ethan. I was a soldier of United States Army in
                  between 2016 to 2022. A year ago I was introduced to software
                  engineering by a good friend who told me how much he truly
                  enjoyed his career. He shared with me how he spent his days
                  solving complex problems and creating outstanding user
                  experiences, while enjoying the freedom to take care of his
                  health and wellbeing.
                </span>

                <span className="bio">
                  Since then, I have spent my time teaching myself and attending
                  an immersive software engineering boot camp to arm myself with
                  the skills necessary to thrive as a software engineer."
                </span>
              </>
            }
          </p>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> console.dir("}
            {<span id="console-log">Ethan.skills</span>}
            {")"}
          </p>
          <p className="about-me-array">frontEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"JavaScript"</span>}</li>
            <li className="array-item">1: {<span>"React.js"</span>}</li>
            <li className="array-item">2: {<span>"Redux"</span>}</li>
            <li className="array-item">3: {<span>"SASS"</span>}</li>
          </ul>
          <p className="about-me-array">backEnd: Array(4)</p>
          <ul>
            <li className="array-item">0: {<span>"Node.js"</span>}</li>
            <li className="array-item">1: {<span>"Express.js"</span>}</li>
            <li className="array-item">2: {<span>"Sequelize.js"</span>}</li>
            <li className="array-item">3: {<span>"PostgreSQL"</span>}</li>
          </ul>
          <p className="about-me-array">other: Array(3)</p>
          <ul>
            <li className="array-item">0: {<span>"Git"</span>}</li>
            <li className="array-item">1: {<span>"NPM"</span>}</li>
            <li className="array-item">2: {<span>"RESTful APIs"</span>}</li>
          </ul>
        </div>
        <div className="about-me-entry">
          <p className="about-me-query">
            {"> "}
            <Typewriter
              className="about-me-response"
              words={[""]}
              cursor
              cursorStyle="_"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
