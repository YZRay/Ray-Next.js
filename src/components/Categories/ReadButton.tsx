"use client";
import { Button, Link } from "@nextui-org/react";

const ReadButton = ({ slug }: { slug: string }) => {
  return (
    <Button href={slug} as={Link} color="default" variant="flat">
      Read more
    </Button>
  );
};

export default ReadButton;
