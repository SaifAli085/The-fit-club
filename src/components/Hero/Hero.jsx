import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import theRock from "../../assets/mainPhoto.png";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="hero-blur blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "135px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the world</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span className="quotes">
              In here we will help you to shape and build your ideal like body
              builder.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={180} start={50} delay="2" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={990} start={500} delay="2" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={100} start={25} delay="2" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <Link to="join" spy={true} smooth={true}>
          <button className="btn btn-e">Join now</button>
        </Link>

        <img src={theRock} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
      </div>
    </div>
  );
};

export default Hero;
