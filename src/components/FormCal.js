import React, { useState, useEffect } from "react";

function FormCal() {
  const [showValue, setShowValue] = useState("0");

  const handleClick = (e) => {
    e.preventDefault();
    const input = e.target.value;
    if (input === "C") {
      setShowValue("0");
    } else if (showValue === "0") {
        setShowValue(e.target.value)
    } else {
      setShowValue((prev) => `${prev}${e.target.value}`);
    }
  };

  return (
    <div>
      <div className="p-3 border-b-2 font-bold text-center">
        <h3>Calculator</h3>
      </div>
      <div className="text-left font-bold text-3xl border-b-2 p-5">
        {showValue}
      </div>
      <form
        onClick={handleClick}
        className="grid grid-cols-4 p-5 space-x-4 space-y-4"
      >
        <button
          className="bg-red-500 text-center rounded-md py-2 mt-4 ml-4"
          value={"C"}
        >
          c
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"+-"}
        >
          +-
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"/"}
        >
          /
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"7"}
        >
          %
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"7"}>
          7
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"8"}>
          8
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"9"}>
          9
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"*"}
        >
          *
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"4"}>
          4
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"5"}>
          5
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"6"}>
          6
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"-"}
        >
          -
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"1"}>
          1
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"2"}>
          2
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"3"}>
          3
        </button>
        <button
          className="bg-orange-400 text-center rounded-md py-2"
          value={"+"}
        >
          +
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"0"}>
          0
        </button>
        <button className="bg-gray-200 text-center rounded-md py-2" value={"."}>
          .
        </button>
        <button
          className="bg-green-500 col-span-2 text-center rounded-md py-2"
          value={"="}
        >
          =
        </button>
      </form>
    </div>
  );
}

export default FormCal;
