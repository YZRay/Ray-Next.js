"use client";
import Data from "@/components/data/data.json";
import { Image } from "@nextui-org/react";

interface Props {
  id: number;
  images: string[];
  title: string;
  year: number;
}

const TravelPage = () => {
  let content;
  if (Data.travel) {
    content = Data.travel.map((item: Props) => (
      <div key={item.id} className="mb-6 z-0 relative">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <time>{item.year}</time>
        </div>
        <div className="grid auto-rows-[280px] md:auto-rows-[300px] grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {item.images.map((item, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-2 overflow-clip border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
                i === 0 ? "col-span-2 md:col-span-1" : ""
              } ${i === 3 || i === 6 || i === 10 ? "col-span-2" : ""}`}
            >
              <Image
                isZoomed
                src={item}
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
                alt={item}
                loading="lazy"
                removeWrapper={true}
                shadow="lg"
              />
            </div>
          ))}
        </div>
      </div>
    ));
  }

  return <div className="mx-auto w-11/12 md:w-9/12 my-8">{content}</div>;
};

export default TravelPage;
