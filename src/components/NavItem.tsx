"use client";
import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/Config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];
interface NavItem {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export const OTHER_LINKS = [
  {
    label: "Banking",
    href: "#",
  },
  {
    label: "Processing",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Carrier",
    href: "#",
  },
  {
    label: "Contacts",
    href: "#",
  },
];

function NavItem({ category, handleOpen, isOpen, isAnyOpen }: NavItem) {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
              <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8 gap-y-8">
                {category.featured.map((item) => (
                  <div
                    key={item.name}
                    className="group relative text-base sm:text-sm"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src={item.imageSrc}
                        alt="product image"
                        fill
                        className="object-cover object-center"
                      />
                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="ml-2 space-x-5 flex items-center justify-center">
        {OTHER_LINKS.map((obj, idx) => (
          <div key={idx}>
            <Link
              href={obj.href}
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <span className="text-md font-semibold">{obj.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavItem;
