import Button from "./Button";
function Poverty() {
  return (
    <div className="h-[800px] w-full bg-amber-200">
      <div className="flex h-[50%] w-full">
        <div className="bg-[url(OIP.webp)] bg-cover bg-center h-[full w-[50%]">
          {" "}
        </div>
        <div className="h-full w-[50%] p-5">
          <h2 className="text-2xl"> WHAT WE DO</h2>
          <h1 className="text-6xl font-bold"> Education vs. Poverty</h1>
          <br />
          <br />
          <h1 className="text-2xl">
            {" "}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </h1><br />
          <Button
            btntext="LEARN MORE"
            className="text-black-50 h-15 w-40 rounded-4xl border-2 border-black font-semibold"
          />
        </div>
      </div>
      <div className="h-[50%] w-full flex">
        <div className="h-full w-[50%] p-5 bg-white">
          <h2 className="text-2xl">WHERE WE WORK</h2>
          <h1 className="text-6xl font-bold">Africa and Asia</h1><br /><br />
          <h1 className="text-2xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1><br />
           <Button
            btntext="LEARN MORE"
            className="text-black-50 h-15 w-40 rounded-4xl border-2 border-black font-semibold"
          />
        </div>
        <div className="bg-[url(girl.jpg)] bg-cover bg-center h-[full w-[50%]">

        </div>
      </div>
    </div>
  );
}

export default Poverty;
