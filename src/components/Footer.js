import React from "react";

const Footer = ({ theme, user }) => {
  return (
    <p className={`py-8 text-sm font-light text-center ${theme.textColor1}`}>
      <p className="hover:opacity-80 transition-opacity" rel="noreferrer">
        {user.name.split(" ")[0]} .
      </p>
    </p>
  );
};

export default Footer;
