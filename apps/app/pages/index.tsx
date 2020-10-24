import { readFileSync } from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';
// import Link from 'next/link';
import * as klawSync from 'klaw-sync';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

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
    // <LayoutDefault>
    <motion.div initial="exit" animate="enter" exit="exit">
      <LogoWrapper>
        <div>
          <Logo
            animate={{
              scale: [1, 1.25, 1, 1.25, 1],
              rotate: [0, -10, 0, 10, 0],
              // x: [-20, 20, -20],
              // y: [-20, 20, -20],
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
      {/* <ul>
          {postData.map((data, idx) => (
            <li key={idx}>
              <Link href="/[slug]" as={`/${data.slug}`}>
                {data.frontMatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-2 bg-gray-800"></div>
          <div className="flex items-center px-2 py-3">
            <img
              className="w-12 h-12 object-cover rounded-full"
              alt="profile"
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            <div className="mx-3">
              <h2 className="text-xl font-semibold text-gray-800">
                Hello john
              </h2>
              <p className="text-gray-600">
                Sara was replied on the{' '}
                <a href="#" className="text-blue-500">
                  Upload Image
                </a>
                .
              </p>
            </div>
          </div>
        </div> */}
    </motion.div>
    // </LayoutDefault>
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
