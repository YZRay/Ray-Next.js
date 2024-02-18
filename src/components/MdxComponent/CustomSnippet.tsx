import React from "react";
import { Snippet } from "@nextui-org/react";
import { FaCopy } from "react-icons/fa6";

const CustomSnippet = ({ children }: { children: React.ReactNode }) => {
  return (
    <Snippet
      className="snippet mt-3 relative z-[0]"
      size="md"
      variant="bordered"
      copyIcon={<FaCopy />}
    >
      {children}
    </Snippet>
  );
};

export default CustomSnippet;
