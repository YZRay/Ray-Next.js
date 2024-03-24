import React from "react";
import Image from "next/image";

const TravelPage = () => {
  return (
    <div className="mx-auto w-10/12 my-8">
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-2xl font-bold">蘭嶼</h2>
        <time>2022/07/12</time>
      </div>
      <div className="grid auto-rows-[320px] grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 overflow-clip border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/my-blog-dev-f6823.appspot.com/o/%E8%98%AD%E5%B6%BC%2FLINE_ALBUM_2020.07.01_240323_2.jpg?alt=media&token=8c291ac8-0bc4-48a8-ac92-ea502638b188"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="蘭嶼"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPage;
