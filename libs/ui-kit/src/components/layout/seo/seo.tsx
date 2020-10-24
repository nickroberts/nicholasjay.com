import Head from 'next/head';

/* eslint-disable-next-line */
export interface SeoProps {
  title?: string;
  image?: string;
  description?: string;
}

const DEFAULT_TITLE = 'Nicholas Jay';

export const Seo = ({ title, image, description }: SeoProps) => {
  return (
    <Head>
      <title>{title ? `${DEFAULT_TITLE} | ${title}` : DEFAULT_TITLE}</title>
    </Head>
  );
};

export default Seo;
