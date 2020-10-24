import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/dracula';
import theme from 'prism-react-renderer/themes/vsDark';

export const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'markup';
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens
            .filter((line, i) => i < tokens.length - 1)
            .map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
        </pre>
      )}
    </Highlight>
  );
};
export default CodeBlock;
