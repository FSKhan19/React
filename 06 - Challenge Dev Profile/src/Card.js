import React from "react";
import "./Card.css";

function Card({ profile }) {
  return (
    <div className="card">
      <Avatar imageSrc={profile.image} altName={profile.name} />
      <div className="data">
        <Intro name={profile.name} intro={profile.intro} />
        <SkillList skills={profile.skills} />
      </div>
    </div>
  );
}

function Avatar({ imageSrc, altName }) {
  return <img src={imageSrc} alt={altName} className="avatar" />;
}

function Intro({ name, intro }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{intro}</p>
    </>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.length} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  let skillStyle = { backgroundColor: skill.color };
  return (
    <div className="skill" style={skillStyle}>
      <span>{skill.name}</span>
      <span>{skill.emoji}</span>
    </div>
  );
}

export default Card;
