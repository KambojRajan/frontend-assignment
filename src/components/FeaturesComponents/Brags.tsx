import React from "react";

const brags = [
  {
    bragAmount: "2 Million",
    bragTitle: "Customers",
    bragSubtittle: " wgernibv krjbj ernblejb liejtbinebnelbje htrhyh",
  },
  {
    bragAmount: "1K",
    bragTitle: "Downloads",
    bragSubtittle: " wgernibv krjbj ernblejb liejtbinebnelbje rhtyhrj",
  },
  {
    bragAmount: "$73 Million",
    bragTitle: "Transactions",
    bragSubtittle: " wgernibv krjbj ernblejb liejtbinebnelbje rhbr6n56jerhyw",
  },
  {
    bragAmount: "2.0",
    bragTitle: "Latest Version",
    bragSubtittle:
      "krjbj ernblejb liejtbinebnelbjy h4 j576iktrewhqrg  ",
  },
];

export default function Brags() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-20">
      {brags.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full sm:w-1/2 md:w-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center mb-2">
            <span className="text-4xl text-purple-800">{item.bragAmount}</span>
          </div>
          <h1 className="text-lg font-semibold mb-1 text-center">
            {item.bragTitle}
          </h1>
          <p className="text-xs text-center max-w-xs mx-auto md:max-w-none text-gray-600">
            {item.bragSubtittle}
          </p>
        </div>
      ))}
    </div>
  );
}
