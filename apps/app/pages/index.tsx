import { readFileSync } from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';
// import Link from 'next/link';
import * as klawSync from 'klaw-sync';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import Head from 'next/head';

// import { LayoutDefault } from '@nicholasjay/ui-kit';

const root = process.cwd();

const LogoWrapper = styled.div`
  ${tw`w-screen h-screen grid justify-center items-center overflow-hidden`}
  div {
    ${tw`w-64`}
  }
`;

const Logo = styled(motion.div)`
  img {
    max-width: 100%;
  }
`;

export default function IndexPage({ postData }) {
  return (
    <>
      <Head>
        <title>Nicholas Jay</title>
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <LogoWrapper>
          <div>
            <Logo
              animate={{
                scale: [1, 1.25, 1, 1.25, 1],
                rotate: [0, -10, 0, 10, 0],
                x: [-20, 20, -20],
                y: [-20, 20, -20],
              }}
              transition={{
                type: 'spring',
                repeat: Infinity,
                duration: 4,
              }}
            >
              <img src="logo-mark.svg" alt="Nicholas Jay" />
            </Logo>
          </div>
        </LogoWrapper>
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
