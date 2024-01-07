import React from "react";
import { Globe, Key, Lock } from "lucide-react";

const pros = [
  {
    logo: <Globe />,
    header: "Globaly accepted",
    subtext: "lekj v ekvinjee rjhvuuefv bwkefvmbv,evwvsjdkvwkh evwejnv jrvjerv",
  },
  {
    logo: <Key />,
    header: "Biometric Integrated",
    subtext:
      "m j kbwe rkfrdbjnrlbjlbgk jnribl nrlgbj erj bnlfbnfi bgib jn  bkb",
  },
  {
    logo: <Lock />,
    header: "Fully Secured",
    subtext:
      "wvf knvndfvknfvkjn ekvjnkjnvkjnvljvnj fdvbwj fihriekgy34ohg2ifqwjd ",
  },
];

export default function Pros() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-20">
      {pros.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-1/2 md:w-auto"
        >
          <div className="bg-purple-200 w-14 h-14 rounded-full flex flex-col md:flex-row items-center justify-center mb-2">
            <span>{item.logo}</span>
          </div>
          <h1 className="text-lg font-semibold mb-1 text-center">
            {item.header}
          </h1>
          <p className="text-xs text-center max-w-xs mx-auto text-gray-600">
            {item.subtext}
          </p>
        </div>
      ))}
    </div>
  );
}
