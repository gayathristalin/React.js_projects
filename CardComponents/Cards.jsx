import React from "react";
// import "./Cards.css";
import PropTypes from "prop-types";
const UsserList = [
  {
    name: "Antony Bridgerton",
    loc: "Mayfair",
    desig: "Viscount",
    img: "images/AB.jpg",
    skills: ["Math", "UI/UX", "JAVA", "Dance", "Springboot", "MERN-stack"],
    status: false,
  },
  {
    name: "Benedict Bridgerton",
    loc: "Mayfair",
    desig: "Artist",
    img: "images/BB.jpg",
    skills: ["Art", "UI/UX", "Python", "Django", "AIML"],
    status: true,
  },
  {
    name: "Colin Bridgerton",
    loc: "Mayfair",
    desig: "Traveller",
    img: "images/CB.jpg",
    skills: ["Writing", "StoryTelling", "Friendship advise", "Django", "AIML"],
    status: true,
  },
];

function User(props) {
  return (
    <div className="cardcontainer">
      <h6 className={props.status ? "status on" : "status off"}>
        {props.status ? "ONLINE" : "OFFLINE"}
      </h6>
      <img
        className="img"
        src={props.img}
        style={{ with: "30px", height: "130px" }}
      ></img>
      <p className="name">{props.name}</p>
      <p className="location">{props.loc}</p>
      <p className="designation">{props.desig}</p>
      <div className="buttons">
        <button className="btn-primary">Message</button>
        <button className="btn-primaryoutline">Following</button>
      </div>
      <div className="skills">
        <h6 className="skillstitle">Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const Cards = () => {
  return (
    <div className="finaldisplay">
      {UsserList.map((users, index) => (
        <User
          key={index}
          name={users.name}
          loc={users.loc}
          desig={users.desig}
          img={users.img}
          skills={users.skills}
          status={users.status}
        />
      ))}
    </div>
  );
};
User.propTypes = {
  name: PropTypes.string.isRequired,
  loc: PropTypes.string.isRequired,
  desig: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
};

export default Cards;
{
  /* <User
name="Benedict Bridgerton"
loc="Mayfair"
desig="Artist"
img="images/BB.jpg"
skills={["Art", "UI/UX", "Python", "Django", "AIML"]}
status={true}
/> */
}
