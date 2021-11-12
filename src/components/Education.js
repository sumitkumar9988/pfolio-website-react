import React from "react";
import Item from "./Card/Education";

const Experience = ({ theme, user }) => {
  const [education, setEducation] = React.useState(user.education);
  let x, y, z;
  x = 0;
  y = education.length - parseInt(education.length / 2);
  z = education.length;

  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto pb-12">
      <div className="mt-20 mb-4 md:mt-28 ml-4 md:ml-16">
        <div>
          <p
            className={` text-2xl font-bold md:text-3xl font-rubik ${theme.textColor1}`}
          >
            Education
          </p>
        </div>
        <div className="">
          <div className="flex flex-col md:hidden ">
            {education.map((item, i) => (
              <Item
                {...item}
                key={i}
                first={i === 0}
                last={i === education.length - 1}
                custom={i}
                theme={theme}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {education.slice(x, y).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={
                      i ===
                      education.length - parseInt(education.length / 2) - 1
                    }
                    custom={i}
                    theme={theme}
                  />
                ))}
              </div>
              <div>
                {education.slice(y, z).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === (education.length % 2 === 0 ? y - 1 : y - 2)}
                    custom={i}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
