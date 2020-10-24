import tw, { styled } from 'twin.macro';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  ${tw`bg-gray-900 p-2 text-white`}
`;

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <h1>Welcome to header!</h1>
    </StyledHeader>
  );
};

export default Header;
