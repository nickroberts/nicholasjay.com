import type { AppProps } from "next/app";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React from "react";

import "@styles/global.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
