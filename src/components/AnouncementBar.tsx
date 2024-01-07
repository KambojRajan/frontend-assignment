"use client";
import React, { useEffect, useState } from "react";
import { ANOUNCEMENT_DATA } from "./AnouncementBarComponents/DataMocks";

export default function AnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ANOUNCEMENT_DATA.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center mt-2">
      {ANOUNCEMENT_DATA.map((item, index) => (
        <div
          key={index}
          style={{ display: index === currentIndex ? "block" : "none" }}
          className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 space-x-2"
        >
          <span className="text-sm bg-gray-200 rounded-full p-1 hover:bg-gray-300">
            {"Announcement"}
          </span>
          <span className="text-sm">{item.lorem}</span>
        </div>
      ))}
    </div>
  );
}
