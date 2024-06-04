// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projHangman from "../assets/img/project-hangam.jpg";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Projects = () => {
//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Hangman Game",
//       description: "HTML, CSS, JS",
//       imgUrl: projHangman,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Projects</h2>
//                   <p>Here's a list of my projects across various domains!</p>
//                   <br />
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav
//                       variant="pills"
//                       className="nav-pills mb-5 justify-content-center align-items-center"
//                       id="pills-tab"
//                     >
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Development</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Analysis</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Machine Learning</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content
//                       id="slideInUp"
//                       className={
//                         isVisible ? "animate__animated animate__slideInUp" : ""
//                       }
//                     >
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="second">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   );
// };

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projHangman from "../assets/img/project-hangam.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projGrilli from "../assets/img/proj-grilli.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://abtg08.github.io/Marvel_Hangman_Game/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://abtg08.github.io/Marvel_Hangman_Game/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://abtg08.github.io/Marvel_Hangman_Game/",
    },
    {
      title: "Hangman Game",
      description: "HTML, CSS, JS",
      imgUrl: projHangman,
      url: "https://abtg08.github.io/Marvel_Hangman_Game/",
    },
    {
      title: "Cafe Grilli",
      description: "HTML, CSS, JS",
      imgUrl: projGrilli,
      url: "https://abtg08.github.io/Cafe-Grilli/#",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://abtg08.github.io/Marvel_Hangman_Game/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here's a list of my projects across various domains!</p>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Analysis</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
