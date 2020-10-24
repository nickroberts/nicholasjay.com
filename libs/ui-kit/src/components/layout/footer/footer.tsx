import tw, { styled } from 'twin.macro';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  ${tw`bg-gray-900 p-2 text-white`}
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter>
      <h1>Welcome to footer!</h1>
    </StyledFooter>
  );
};

export default Footer;
