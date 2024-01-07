import React from "react";
import { DemoLogos } from "./demoData";
import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {DemoLogos.map((item) => (
        <div key={item.logoName} className="w-1/4 md:w-1/5 sm:w-1/3 p-2">
          <Image
            src={item.logo}
            alt={item.logoName}
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
}
