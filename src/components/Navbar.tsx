import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import AnouncementBar from "./AnouncementBar";
import { LogOut } from "lucide-react";
import { NavButton } from "./NavButton";

function Navbar() {
  const user = null;

  return (
    <div className="block bg-white sticky z-50 top-0 inset-x-0 h-15">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <AnouncementBar /> {/*here is the anouncemet bar*/}
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <h1 className="text-lg font-bold">Model UI</h1>
                </Link>
              </div>
              <div></div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex item-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {!user ? (
                    <Button
                      variant={"secondary"}
                      className="flex items-center space-x-2 hover:text-gray-900 hover:bg-gray-200"
                    >
                      <span>Log Out</span>
                      <LogOut className="w-4 h-4 text-gray-500 hover:text-gray-900" />
                    </Button>
                  ) : (
                    <>
                      <Link
                        href="#"
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {user ? "Sign In" : "Create Account"}
                      </Link>
                    </>
                  )}
                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}
                </div>
                <NavButton />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default Navbar;
