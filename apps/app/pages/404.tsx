import { motion } from 'framer-motion';
import Head from 'next/head';

import NjLogo from '../components/nj-logo';

export default function PageNotFoundPage() {
  return (
    <>
      <Head>
        <title>Nicholas Jay</title>
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <NjLogo />
      </motion.div>
    </>
  );
}
