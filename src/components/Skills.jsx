// import meter1 from "../assets/img/skillsItem/mongodb2.svg";
// import meter2 from "../assets/img/skillsItem/node.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import next from "../assets/img/skillsItem/next.svg";
import react from "../assets/img/skillsItem/react.svg";
import express from "../assets/img/skillsItem/express.svg";
import node from "../assets/img/skillsItem/node.svg";
import mongo from "../assets/img/skillsItem/mongodb.svg";
import tailwind from "../assets/img/skillsItem/tailwind.svg";
import html from "../assets/img/skillsItem/html.svg";
import css from "../assets/img/skillsItem/css.svg";
import js from "../assets/img/skillsItem/js.svg";
import cpp from "../assets/img/skillsItem/c++.svg";
import python from "../assets/img/skillsItem/python.svg";
import git from "../assets/img/skillsItem/git.svg";
import ml from "../assets/img/skillsItem/ml2.svg";
import figma from "../assets/img/skillsItem/figma.svg";
import mysql from "../assets/img/skillsItem/mysql.svg";
import excel from "../assets/img/skillsItem/excel.svg";
import power from "../assets/img/skillsItem/powerbi.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Dive into my toolkit of talents, where coding meets creativity
                <br></br> and problem-solving gets playful!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={power} alt="Image" />
                  <h5>Power BI</h5>
                </div>
                <div className="item">
                  <img src={next} alt="Image" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={cpp} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={excel} alt="Image" />
                  <h5>Excel</h5>
                </div>
                <div className="item">
                  <img src={ml} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
