import React from "react";
import Image from "next/image";

export default function FeaturesWithImages() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
      <div className="bg-purple-200 rounded-md p-5">
        <div className="bg-purple-500 w-[35vw] h-[30vh] rounded-md flex justify-center items-center">
          <span>Add an image here</span>
          {/* <Image alt="card image" src="/demo images1" fill /> */}
        </div>
      </div>
      <div className="bg-purple-200 rounded-md p-5">
        <div className="bg-purple-500 w-[35vw] h-[30vh] rounded-md flex justify-center items-center">
          <span>Add an image here</span>
          {/* <Image alt="card image" src="/demo images1" fill /> */}
          {/* and if this image needs to be maximized then I can add a simple dialog/model */}
        </div>
      </div>
    </div>
  );
}
