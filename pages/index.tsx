import Head from "next/head";
import { motion } from "framer-motion";

import NjLogo from "@components/nj-logo";
import ResumeLink from "@components/resume-link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicholas Jay</title>
      </Head>

      <main>
        <motion.div initial="exit" animate="enter" exit="exit">
          <NjLogo />
          <ResumeLink />
        </motion.div>
      </main>
    </>
  );
}
