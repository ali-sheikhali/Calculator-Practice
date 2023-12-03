import React from "react";

function Wrapper({ children }) {
  return <div className="w-8/12 mx-auto shadow-md mt-20 p-3 rounded-md">
    {children}
    </div>;
}

export default Wrapper;

//flex justify-center items-center mt-20