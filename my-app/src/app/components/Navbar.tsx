import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="flex w-10/12 justify-around h-20 mx-auto sticky">
      <div className="flex py-1">
        <img src="" alt="" className=" my-auto h-6 w-6 bg-blue-900" />
        <h1 className="text-3xl my-auto">AMAN</h1>
      </div>
      <div className="flex flex-around">
          <p className="my-auto px-2">home</p>
          <p className="my-auto px-2">features</p>
          <p className="my-auto px-2">Screenshots</p>
          <p className="my-auto px-2">Blog</p>
          <p className="my-auto px-2">Price</p>
          <p className="my-auto px-2">contact</p>
      </div>
      <div className="flex">
        <h1 className="my-auto px-2">Sign In</h1>
        <button className="my-auto bg-orange-700 rounded-full h-9  px-3">Sign up</button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
