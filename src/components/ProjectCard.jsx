import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  //Checks for empty url and sends it to the top of the website. Made to add Portfolio project here!
  const handleClick = (event) => {
    if (!url) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="proj-link"
        onClick={handleClick} //added onclick to check if the project tile is clicked. If the url of that tile is empty, it redirects as stated by handleClick function above
      >
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

//Old Card:
// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   );
// };
