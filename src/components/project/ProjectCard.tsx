import React from "react";
import { Card, CardBody, Image, Link, Button } from "@nextui-org/react";
import GetSkillIcon from "./GetSkill";
import { useRouter } from "next/navigation";

interface Props {
  description: string;
  imageUrl: string;
  name: string;
  skill: Array<string>;
  url: string;
  slug: string;
}
const ProjectCard: React.FC<Props> = ({
  description,
  imageUrl,
  name,
  skill,
  url,
  slug,
}) => {
  const router = useRouter();

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
          <div className="relative col-span-6 lg:col-span-4 overflow-clip rounded-lg h-56">
            <Image
              alt="Album cover"
              className="object-cover h-full w-full"
              height={240}
              shadow="md"
              src={imageUrl}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col col-span-6 lg:col-span-8 gap-6 px-0 md:px-5">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-foreground/90">{name}</h1>
              <p className="line-clamp-2">{description}</p>
              <div className="flex align-center gap-2 flex-wrap">
                {skill.map((s, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    {GetSkillIcon(s)}
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="ms-auto flex items-center gap-3">
              {url && (
                <Button
                  href={url}
                  as={Link}
                  color="default"
                  showAnchorIcon
                  variant="solid"
                  className="w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  專案連結
                </Button>
              )}
              <Button
                onClick={() => router.push(`project/${slug}`)}
                color="default"
                variant="solid"
                className="w-fit"
              >
                詳細內容
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
