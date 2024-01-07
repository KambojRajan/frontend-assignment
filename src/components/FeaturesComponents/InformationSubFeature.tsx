import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function InformationSubFeature() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Elevating Card Programs with Cutting-Edge Technology
        </h1>
        <p className="text-sm text-gray-600">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua,
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href="/your-target-url"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "text-purple-900 hover:text-purple-700"
          )}
        >
          Compare all pro features &rarr;
        </Link>
      </div>
    </div>
  );
}
