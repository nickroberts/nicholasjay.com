import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { basename, join, relative } from 'path';
// import Link from 'next/link';
import * as klawSync from 'klaw-sync';
import tw, { styled } from 'twin.macro';
import { motion } from 'framer-motion';

import { LayoutDefault } from '@nicholasjay/ui-kit';
import { CodeBlock } from '@nicholasjay/ui-kit';
import Head from 'next/head';

const root = process.cwd();

const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

const StyledContent = styled.div`
  ${tw`prose lg:prose-xl`}
`;

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });
  return (
    <>
      <Head>
        <title>{`Nicholas Jay${frontMatter.title ? ` | ${frontMatter.title}` : ''}`}</title>
      </Head>
      <LayoutDefault title={frontMatter.title}>
        <motion.div initial="exit" animate="enter" exit="exit">
          <h1>{frontMatter.title}</h1>
          {/* <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/first-post">My 1st Post</Link>
            </li>
            <li>
              <Link href="/subfolder/second-post">My 2nd Post</Link>
            </li>
          </ul> */}
          <StyledContent>{content}</StyledContent>
        </motion.div>
      </LayoutDefault>
    </>
  );
}
export async function getStaticPaths() {
  const contentRoot = join(root, 'apps/app/content');
  const paths = klawSync(contentRoot)
    .filter((file) => {
      const name = basename(file.path);
      return file.stats.isFile() && (name === '.' || name[0] !== '.');
    })
    .map((file) => {
      return {
        params: {
          slug: relative(contentRoot, file.path).replace(/\.mdx/, '').split('/'),
        },
      };
    });
  return {
    fallback: false,
    paths,
  };
}
export async function getStaticProps({ params }) {
  const source = readFileSync(join(root, 'apps/app/content', `${params.slug.join('/')}.mdx`), 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, { components });
  return { props: { mdxSource, frontMatter: data } };
}
