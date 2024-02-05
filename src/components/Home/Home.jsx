import React from "react";

import ImageSlider from "../ImageSlider/ImageSlider";

const HomeComponent = () => {
  return (
    <>
      <div className="flex overflow-hidden h-screen justify-center w-[100%] bg-slate-200">
        <div className=" mx-auto overflow-hidden object-fill bg-slate-400 py-4 px-8">
          <ImageSlider className="rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
