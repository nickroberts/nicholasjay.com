import { PropsWithChildren } from 'react';
import { styled } from 'twin.macro';

import Header from '../header/header';
import Footer from '../footer/footer';
import Seo, { SeoProps } from '../seo/seo';

/* eslint-disable-next-line */
export interface LayoutDefaultProps extends SeoProps {}

const StyledDefault = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
    padding: 15px 5px 10px 5px;
  }
  footer {
    grid-area: footer;
  }
`;

export const LayoutDefault = ({
  children,
  description,
  image,
  title,
}: PropsWithChildren<LayoutDefaultProps>) => {
  return (
    <>
      <Seo description={description} image={image} title={title} />
      <StyledDefault>
        <Header>header</Header>
        <main>{children}</main>
        <Footer>footer</Footer>
      </StyledDefault>
    </>
  );
};

export default LayoutDefault;
