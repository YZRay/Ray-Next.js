import React from "react";
import { Card, CardBody, Skeleton } from "@nextui-org/react";

const ProjectSkeletonCard = () => {
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
            <Skeleton className="rounded-lg">
              <div className="h-48 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="w-full flex flex-col gap-4 col-span-6 md:col-span-8">
            <Skeleton className="h-4 w-3/5 rounded-lg" />
            <Skeleton className="h-4 w-1/3 rounded-lg" />
            <Skeleton className="h-4 w-11/12 rounded-lg" />
            <Skeleton className="h-4 w-7/12 rounded-lg" />
            <Skeleton className="h-4 w-1/2 rounded-lg" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectSkeletonCard;
