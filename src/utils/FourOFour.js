import React from "react";
import FourOFourSVG from "./../Asset/404.svg";
const FourOFour = ({ status, message }) => {
  return (
    <div>
      <section class="py-20 overflow-hidden">
        <div class="container px-4 mx-auto text-center">
          <img
            class="mx-auto md:max-w-md mb-4 h-80"
            src={FourOFourSVG}
            alt=""
          />
          <span class="text-4xl text-red-500 font-bold font-heading">
            {status}
          </span>
          <h2 class="mb-4 text-4xl font-bold font-heading">{message}</h2>
          <div>
            <p
              class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-400 hover:bg-red-500 rounded"
              href=""
            >
              Go back to Homepage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourOFour;
