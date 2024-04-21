import { Chip } from "@nextui-org/react";
import clsx from "clsx";
const CategoryChip = ({ text }: { text: string }) => {
  const textTrim = text.trim();

  const colorClass = clsx({
    primary: textTrim === "react",
    warning: textTrim === "javascript",
    success: textTrim === "nodejs",
    danger: textTrim === "css",
  }) as
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default"
    | undefined;

  return (
    <Chip color={colorClass} variant="flat">
      {text}
    </Chip>
  );
};

export default CategoryChip;
