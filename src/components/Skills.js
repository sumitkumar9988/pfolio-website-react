import React from "react";

const Skills = ({ theme, user }) => {
  return (
    <div>
      <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
        <div className=" pb-8 ml-0  p-8 md:p-16">
          <div>
            <p
              className={`mb-4 text-2xl font-bold md:text-3xl font-rubik ${theme.textColor1}`}
            >
              Skills
            </p>
          </div>
          <div className="max-w-md  mt-8 pl-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {user.skills.map((skill, i) => (
              <div
                className={`block pt-3 pb-2 p-1 text-center ${theme.bgColor2} rounded-lg shadow-xl `}
              >
                <div className="">
                  <img className="mx-auto w-9 h-9" src={skill.logo} alt="" />
                </div>
                <p className={`mt-2 text-base font-medium ${theme.textColor1}`}>
                  {skill.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
