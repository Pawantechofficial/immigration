import ImageSlider from "@/components/ImageSlider/ImageSlider";
import React from "react";

const page = () => {
  return (
    <section className="bg-white w-full justify-center mx-auto">
      <div className="h-[30%] md:h-[50%] xl:h-[90%] w-auto mx-auto overflow-hidden object-fill p-2 pt-20">
        <div className="">
          <ImageSlider />
        </div>
      </div>
      <div className="w-full flex text-center flex-col justify-center mx-auto">
        <h1 className="text-black text-2xl">Hello</h1>
        <p className="text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iure modi
          quas veritatis, incidunt dolorem magnam, vero reiciendis doloribus
          distinctio quia repellat praesentium nihil rerum nostrum sit ad cumque
          ea?
        </p>
      </div>
    </section>
  );
};

export default page;
