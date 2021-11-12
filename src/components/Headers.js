import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { useHeaderVisible } from "./../utils/useHeaderVisible";

const Headers = ({ theme, user }) => {
  // const visible = useHeaderVisible();
  return (
    <div className="absolute z-30 w-full opacity-90 transition-top  flex items-center transform transition duration-200 justify-center mx-auto py-8">
      <div className="w-full md:w-10/12 lg:w-7/12 ">
        <div>
          <Link to="/">
            <div
              className={`${theme.textColor1} text-2xl mx-8 lg:mx-16 font-rubik font-semibold `}
            >
              {user.name.split(" ")[0]}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;
