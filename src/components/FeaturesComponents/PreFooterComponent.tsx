import { CreditCard, Headphones, Star, Stars } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function PreFooterComponent() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 mb-4 relative rounded-md">
          <Image
            src={"/public/Logo/wiseLogo.png"}
            layout="fill"
            className="bg-purple-600"
            alt="wiseLogo"
          />
        </div>
        <p className="mb-4 max-w-[80vw] md:max-w-[40vw] text-wrap font-semibold">
          {
            "I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry."
          }
        </p>

        <div className="items-center justify-center mb-4 flex flex-col space-y-3">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-2 bg-purple-500">
            <Image
              src={"/public/Logo/wiseLogo.png"}
              layout="fill"
              alt="Wise logo"
            />
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-6 h-6">
                <Star className="text-yellow-500 " />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 max-w-[80vw] md:max-w-[40vw] text-wrap">
          <span className="text-4xl font-semibold mb-4">
            Unlock Limitless Possibilities with Our New Card Solutions
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 pt-5">
            <Button variant={"default"} className="flex items-center space-x-1">
              <CreditCard className="w-5 h-5 text-gray-700" />
              <span>Unlock your card</span>
            </Button>
            <Button
              variant={"secondary"}
              className="flex items-center space-x-1"
            >
              <Headphones className="w-5 h-5 text-gray-700" />
              <span>Customer Support</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
