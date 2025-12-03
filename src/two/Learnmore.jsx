import React from "react";
import Button from "./Button";
import Box from "./Box";

function Learnmore() {
  return (
    <div className="h-[800px] w-\[100\%\] flex  bg-gray-200 items-center">
      <div className="h-150 w-[40%]  flex flex-col justify-center items-center">
        <div className="w-9/10">
          <h1 className="font-extrabold text-4xl ">
            Story about <br /> What we do
          </h1>
          <br />
        </div>
        <p className="text-1xl w-9/10">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo
          d tempor incididunt ut labore et dolore magna aliqua. Praesent
          ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi. Curabitur non
          mi et turpis pharetra vulputate.
        </p>
        <div className="w-9/10">
          <Button
            btntext="LEARN MORE"
            className="text-black-50 h-15 w-40 rounded-4xl border border-black font-semibold"
          />
        </div>
      </div>
      <div className="flex  flex-col justify-between h-[660px]  ">
        <div>
          <div className="flex gap-10 ">
            <Box
              className="h-[300px] w-[400px]  p-3 flex items-center  bg-white flex-col"
              Boxtext="LEAVE A LEGACY"
              Boxtext2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              Boxtext3='MORE'
            />
            <Box
              className="h-[300px] p-3 w-[400px]   flex items-center flex-col  bg-white"
              Boxtext="LEAVE A LEGACY"
              Boxtext2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
              Boxtext3='MORE'
            />
          </div>
        </div>
        <div className="flex gap-10">
          <Box
            className="h-[300px] p-3 w-[400px]  items-center flex flex-col  bg-white"
            Boxtext="LEAVE A LEGACY"
            Boxtext2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            Boxtext3='MORE'
          />
          <Box
            className="h-[300px] p-3 w-[400px]   flex items-center flex-col   bg-white"
            Boxtext="LEAVE A LEGACY"
            Boxtext2="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            Boxtext3='MORE' 
          />
        </div>
      </div>
    </div>
  );
}

export default Learnmore;
