"use client";
import { Button, Link } from "@nextui-org/react";

const ReadButton = ({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) => {
  return (
    <Button
      className={className}
      href={slug}
      as={Link}
      color="default"
      variant="flat"
    >
      Read more
    </Button>
  );
};

export default ReadButton;
