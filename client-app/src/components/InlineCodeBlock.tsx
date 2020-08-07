import React from "react";

interface IProp {
  value: any;
}

const InlineCodeBlock: React.FC<IProp> = ({ value }) => {
  return (
    <span style={{ backgroundColor: "#f8f8f8", color: "#e96900" }}>
      {value}
    </span>
  );
};

export default InlineCodeBlock;
