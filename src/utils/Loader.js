import React from "react";

import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
  return (
    <div>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 z-50">
        <div class="text-blue-500 flex h-screen justify-center items-center ">
          <MoonLoader color="#111" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
