import React from "react";
import Pros from "./ProsData";
import InformationSubFeature from "./InformationSubFeature";
import FeatuesWithImages from "./FeatuesWithImages";
import Brags from "./Brags";
import PreFooterComponent from "./PreFooterComponent";
import Footer from "../FooterComponents/Footer";

export default function Features() {
  return (
    <div className="py-8 px-4">
      <InformationSubFeature />
      <Pros />
      <div className="pt-10 md:pt-20">
        <InformationSubFeature />
        <FeatuesWithImages />
      </div>
      <Brags />
      <PreFooterComponent />
      <Footer />
    </div>
  );
}
