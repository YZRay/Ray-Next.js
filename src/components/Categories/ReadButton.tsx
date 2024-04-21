"use client";
import { Button, Link } from "@nextui-org/react";

const ReadButton = ({ slug }: { slug: string }) => {
  return (
    <Button href={slug} as={Link} color="default" variant="bordered">
      Read more
    </Button>
  );
};

export default ReadButton;
