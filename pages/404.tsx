import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";
// import { forwardRef } from "react";

// const LogoImage = forwardRef<HTMLDivElement>((props, ref) => (
//   <div ref={ref} {...props}>
//     <Image height="60" width="60" src="/logo-mark.svg" alt="Nicholas Jay" />
//   </div>
// ));
// LogoImage.displayName = "LogoImage";

// const MotionLogo = motion(LogoImage);

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Not Found | Nicholas Jay</title>
      </Head>

      <main>
        <div className="bg-gray-800 w-screen h-screen grid justify-center items-center overflow-hidden">
          <div className="text-center">
            <div className="flex-shrink-0 flex justify-center">
              <span className="sr-only">Nicholas Jay</span>
              <Image
                height="60"
                width="60"
                src="/logo-mark.svg"
                alt="Nicholas Jay"
              />
              {/* <MotionLogo
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="show"
                transition={{ ease: "easeInOut", duration: 0.125 }}
              /> */}
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-50 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <div className="mt-6">
              <Link href="/">
                <a className="text-base font-medium text-primary hover:text-secondary">
                  Head Home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
