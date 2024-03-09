"use client";
import React, { useEffect, useState } from "react";
import { getData } from "@/components/api/firebase";
import { useQuery } from "@tanstack/react-query";

const ProjectPage = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["project"],
    queryFn: () => getData(),
  });

  console.log(data);

  return <div>ProjectPage</div>;
};

export default ProjectPage;
