"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PRODUCT_CATEGORIES, OTHER_LINKS } from "../Config";
import { MenuIcon } from "lucide-react";

export function NavButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        {isOpen && (
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              {PRODUCT_CATEGORIES.map((category, index) => (
                <div key={index}>
                  <DropdownMenuLabel>{category.label}</DropdownMenuLabel>
                  {category.featured.map((item, idx) => (
                    <DropdownMenuItem key={idx} href={item.href}>
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                  {index !== PRODUCT_CATEGORIES.length - 1 && (
                    <DropdownMenuSeparator />
                  )}
                </div>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {OTHER_LINKS.map((link, index) => (
                <DropdownMenuItem key={index} href={link.href}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}
