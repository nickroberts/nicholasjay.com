import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

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

export const ErrorPage = () => {
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <LogoWrapper>
        <div>
          <Logo
            animate={{
              scale: [1, 1.25, 1, 1.25, 1],
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              type: 'spring',
              repeat: Infinity,
              duration: 4,
            }}
          >
            <img src="logo-mark.svg" alt="Nicholas Jay" />
            <p className="text-center">[ 404: page not found ]</p>
          </Logo>
        </div>
      </LogoWrapper>
    </motion.div>
  );
};

export default ErrorPage;
