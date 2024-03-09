"use client";
import React from "react";
import { Card, CardBody, Image, Link, Button } from "@nextui-org/react";
import GetSkillIcon from "./GetSkillIcon";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  skill: Array<string>;
  url: string;
}
const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  name,
  skill,
  url,
}) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="md"
      fullWidth={true}
      isHoverable
    >
      <CardBody>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-4 items-center justify-center">
          <div className="relative col-span-6 lg:col-span-4 h-auto overflow-clip rounded-lg">
            <Image
              alt="Album cover"
              className="object-cover h-full w-full"
              height={540}
              shadow="md"
              src={imageUrl}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col col-span-6 lg:col-span-8 gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-foreground/90">{name}</h1>
              <p className="text-small text-foreground/80">12 Tracks</p>
              <p>{description}</p>
              <div className="flex align-center gap-2 flex-wrap">
                {skill.map((s, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    {GetSkillIcon(s)}
                    {s}
                  </div>
                ))}
              </div>
            </div>
            {url && (
              <Button
                href={url}
                as={Link}
                color="default"
                showAnchorIcon
                variant="solid"
                className="ms-auto w-fit"
              >
                專案連結
              </Button>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
