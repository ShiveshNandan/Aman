import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-10/12  mx-auto bg-blue-600 text-white ">
      <div className="flex my-5">
        <div className="flex w-1/2 flex-col my-auto px-3">
          <h1 className="font-semibold text-6xl leading-[4rem]">
            Create your next mobile app landing page in minutes
          </h1>
          <p className="text-sm w-8/12 py-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quo,
            nihil perspiciatis ipsa modi esse fugit odit repellendus quae saepe.
          </p>
          <input
            type="text"
            className="mt-5 rounded-full w-8/12 py-3 px-5 text-sm"
            placeholder="Search"
          />
        </div>
        <div className="flex w-1/2 h-[60vh] bg-blue-500">
            <img src="" alt="" className="w-2/3 h-full bg-black mx-auto" />
        </div>
      </div>
        <div className="flex my-3">
          <div className="flex flex-col w-1/4 h-[15vw] py-auto text-center border rounded-md mx-1">
            <div className="flex flex-col my-auto ">
            <h1 className="text-3xl my-2">5000</h1>
            <p className="text-xs ">Transfers</p>
            </div>
          </div>
           
        </div>
    </div>
  );
};

export default HeroSection;
