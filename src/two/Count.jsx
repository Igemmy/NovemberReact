import Button from "./Button";
function Count() {
  return (
    <div className="h-150 w-[100] flex">
      <div className="h-150 w-[50%]  flex flex-col justify-center items-center">
        <div className="w-9/10">
          <h1 className="font-extrabold text-4xl ">Every moment counts</h1>
          <br />
        </div>
        <p className="text-1xl w-9/10">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent
          ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi. Curabitur non
          mi et turpis pharetra vulputate.
        </p>
        <div className="w-9/10">
          <Button
            btntext="DONATE NOW"
            className="text-black-50 h-15 w-40 rounded-4xl border-2  border-gray-800 font-semibold"
          />
        </div>
      </div>
      <div className="h-150 w-[50%] bg-[url(download1.jpg)] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="h-[40%] w-[80%] flex justify-between items-center">
          <div className="h-40 w-40 rounded-[50%] border-4 border-white flex justify-center items-center text-3xl font-bold text-amber-50">
            700
          </div>
          <div className="h-40 w-40 rounded-[50%] border-4 border-white flex justify-center items-center text-3xl font-bold text-amber-50">
            106
          </div>
        </div>
        <div className="h-[40%] w-[80%] flex justify-between  items-center">
          <div className="h-40 w-40 rounded-[50%] border-4 border-white flex justify-center items-center text-3xl font-bold text-amber-50">
            13
          </div>
          <div className="h-40 w-40 rounded-[50%] border-4 border-white flex justify-center items-center text-3xl font-bold text-amber-50">
            10.6M
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
