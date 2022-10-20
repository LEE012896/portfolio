import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundColor: "#28394a",
        }}
      >
        <div className="intro">
          <h1>hello world, I'm</h1>
          <h2 className="big-header">
            <Typewriter
              className="big-header"
              words={["Ethan Lee", "an Engineer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <h3 className="big-header">I build software.</h3>
          <p className="font-color">
            I'm a full-stack engineer who enjoys making intuitive applications.
          </p>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default Hero;
