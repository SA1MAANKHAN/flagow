import React from "react";

function ProjectCard({ name, image }) {
  return (
    <div className="project__card" style={{ backgroundImage: `url(${image})` }}>
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectCard;
