"use client";
import React, { useEffect, useState } from "react";
import { getData } from "@/components/api/firebase";

const ProjectPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  return <div>ProjectPage</div>;
};

export default ProjectPage;
