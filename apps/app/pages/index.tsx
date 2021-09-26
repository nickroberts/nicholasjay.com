import { readFileSync } from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';
// import Link from 'next/link';
import * as klawSync from 'klaw-sync';
import { motion } from 'framer-motion';
import Head from 'next/head';
import tw, { styled } from 'twin.macro';

import NjLogo from '../components/nj-logo';

// import { LayoutDefault } from '@nicholasjay/ui-kit';

const root = process.cwd();

const ResumeLinkWrapper = styled.div`
  ${tw`absolute right-3 bottom-3 p-3 rounded bg-gray-900 bg-opacity-50`}
`;

const ResumeLink = () => {
  return (
    <ResumeLinkWrapper>
      <a
        className="text-primary hover:text-secondary border-primary border-solid border-b hover:border-secondary"
        href="/nroberts-resume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </ResumeLinkWrapper>
  );
};

export default function IndexPage({ postData }) {
  return (
    <>
      <Head>
        <title>Nicholas Jay</title>
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <NjLogo />
        <ResumeLink />
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
