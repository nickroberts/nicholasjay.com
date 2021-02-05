import { readFileSync } from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';
// import Link from 'next/link';
import * as klawSync from 'klaw-sync';
import { motion } from 'framer-motion';
import Head from 'next/head';

import NjLogo from '../components/nj-logo';

// import { LayoutDefault } from '@nicholasjay/ui-kit';

const root = process.cwd();

export default function IndexPage({ postData }) {
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

export async function getStaticProps() {
  const contentRoot = join(root, 'apps/app/content');
  const postData = klawSync(contentRoot)
    .filter((file) => file.stats.isFile())
    .map((file) => {
      const content = readFileSync(file.path, 'utf8');
      return {
        slug: relative(contentRoot, file.path).replace(/\.mdx/, ''),
        content,
        frontMatter: matter(content).data,
      };
    });
  return { props: { postData } };
}
