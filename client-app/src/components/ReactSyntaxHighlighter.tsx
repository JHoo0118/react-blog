import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  value: string;
  language?: string;
}

const customStyle = {
  backgroundColor: "#f8f8f8",
};

const CodeBlock: React.FC<IProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={coy}
      customStyle={customStyle}
    >
      {value ? value : " "}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
