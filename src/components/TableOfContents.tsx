"use client";
import GithubSlugger from "github-slugger";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// eslint-disable-next-line no-unused-vars
type UseIntersectionObserverType = (setActiveId: (id: string) => void) => void;

const useIntersectionObserver: UseIntersectionObserverType = (setActiveId) => {
  const headingElementsRef = useRef<{
    [key: string]: IntersectionObserverEntry;
  }>({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;

        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
    });

    const headingElements = Array.from(
      document.querySelectorAll("article h2,h3")
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

type Props = {
  source: string;
};

const TableOfContents = ({ source }: Props) => {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^###?\s/));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  return (
    <div className="flex flex-col items-start justify-start gap-3 p-3">
      {headings.map((heading, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`
             ${
               heading.id === activeId
                 ? "font-bold text-slate-600 border-slate-700 hover:text-primary-600 dark:hover:text-sky-800"
                 : "font-normal text-gray-500 border-transparent hover:text-gray-800 hover:border-slate-600 dark:text-gray-400 dark:hover:text-gray-200"
             }
              ${
                heading.level === 3 && "pl-4"
              } text-left text-base transition-all duration-300 text-slate-700 px-6 py-1 border-l-2`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            {heading.text}
          </button>
        );
      })}
      <Link
        href="/posts"
        className="px-6 py-1 hover:text-sky-800 font-bold text-base"
      >
        返回文章列表
      </Link>
    </div>
  );
};

export default TableOfContents;
