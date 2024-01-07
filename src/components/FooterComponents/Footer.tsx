import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const footerComponents = [
  {
    title: "Company",
    description: ["About us", "Contact us", "Features"],
  },
  {
    title: "Product",
    description: ["Figma design system", "Ios kit", "Android kit", "Wireframe"],
  },
  {
    title: "Resource",
    description: [
      "Templates",
      "Landing pages",
      "Documentation",
      "Comp library",
    ],
  },
  {
    title: "Legal",
    description: [
      "Privacy policy",
      "Terms & Conditions",
      "Disclaimer",
      "Affiliate programme",
    ],
  },
  {
    title: "Support",
    description: ["Help centre", "Raise ticket", "Report", "Refund"],
  },
];

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="border border-t border-gray-500 mt-10"></div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8">
        <h1 className="text-semibold text-lg">Mode UI</h1>
        <p className="text-gray-700 text-sm max-w-[70vw] md:max-w-[40vw] text-center md:text-left md:ml-4 mt-4 md:mt-0">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </p>
      </div>
      <div className="border border-t border-gray-500 mt-10"></div>
      <footer className="text-gray-900">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {footerComponents.map((component, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-4">{component.title}</h3>
                <ul>
                  {component.description.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="hover:text-purple-800 hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
