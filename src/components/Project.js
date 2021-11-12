import React, { useState } from "react";
import ProjectCard from "./Card/ProjectCard";

const Project = ({ theme, user }) => {
  const [project, setProject] = useState(user.project);
  return (
    <div>
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto pb-12">
        <div className="mt-20 mb-4 ">
          <div>
            <p
              className={`md:mt-28 ml-8 md:ml-16 lg:ml-32 text-2xl font-bold md:text-3xl font-rubik   ${theme.textColor1}`}
            >
              Project
            </p>
          </div>
          <div className=" mt-10 md:mt-20 md:px-8 max-w-screen-lg">
            {project.map((project, i) => (
              <ProjectCard
                key={i}
                rightShift={i % 2 === 0}
                {...project}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
