import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  name: string;
  skill: Array<string>;
  url: string;
}
const ProjectCard: React.FC<Props> = ({
  id,
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
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={imageUrl}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-foreground/90">{name}</h1>
              <p className="text-small text-foreground/80">12 Tracks</p>
              <p>{description}</p>
              <div className="flex align-center gap-2">
                {skill.map((s, index) => (
                  <p key={index} className="text-small text-foreground/80">
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
