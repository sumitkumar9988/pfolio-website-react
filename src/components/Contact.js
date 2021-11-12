import React from "react";

const Contact = ({ theme, user }) => {
  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto pb-12">
      <div className="mt-20 mb-8 md:mt-28 ml-4 md:ml-16">
        <div>
          <p
            className={` text-2xl font-bold md:text-3xl font-rubik ${theme.textColor1}`}
          >
            Contact Me
          </p>
        </div>
        <div className="">
          <div className="mt-8">
            <a
              href="mailto:s@pfolio.me"
              className={`text-base font-medium md:text-xl ${theme.textColor2}`}
            >
              {user.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
