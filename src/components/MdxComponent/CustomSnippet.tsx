import React from "react";
import { Snippet } from "@nextui-org/react";
import { FaCopy } from "react-icons/fa6";

const CustomSnippet = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => {
  return (
    <Snippet
      className="snippet my-2 relative z-[0] w-full"
      size="md"
      variant="bordered"
      copyIcon={<FaCopy />}
    >
      {text}
    </Snippet>
  );
};

export default CustomSnippet;
