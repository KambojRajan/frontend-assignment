import Features from "@/components/FeaturesComponents/Features";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LogoCloud from "@/components/logoCloud/LogoCloud";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <p className="text-sm text-purple-900">Seamless experience</p>
          <h1 className="text-4xlo font-bold tracking-tight text-gray-900 sm:text-6xl">
            Unleashing the Next Generation of Card Solutions
          </h1>
          <p className="mt-6 text-sm max-w-prose text-muted-foreground">
            consectetur adipiscing elit. sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          {/* sm means for small devices and then all */}
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col sm:flex-row mt gap-4 mt-6">
              <Link href="/products" className={buttonVariants()}>
                Unlock your card &rarr;
              </Link>
            </div>
            <p className="text-gray-800 text-sm">*No credit card required</p>
          </div>
        </div>
        {/* todo list product */}
      </MaxWidthWrapper>
      <section>
        <MaxWidthWrapper className="py-10">
          <div className="flex flex-wrap justify-center items-center md:text-lg sm:text-md">
            <LogoCloud />
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="border-t border-gray-200">
        <MaxWidthWrapper className="py-5">
          <div className="flex flex-wrap justify-center items-center md:text-lg sm:text-md">
            <Features />
          </div>
        </MaxWidthWrapper>
      </section>
      
    </>
  );
}
