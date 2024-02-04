"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { removeDuplicateNewLine } from "@/lib/removeDuplicateNewLine";
import { FaCopy, FaCheck } from "react-icons/fa6";
type Props = React.ComponentPropsWithoutRef<"pre">;

function CustomPre({ children, className, ...props }: Props) {
  const preRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await copyToClipboard(removeDuplicateNewLine(preRef.current.innerText));
      setCopied(true);
    }
  };

  return (
    <div className="group relative">
      <pre
        {...props}
        ref={preRef}
        className={clsx(className, "focus:outline-none")}
      >
        <div className="absolute top-0 right-0 m-2 flex items-center rounded-md bg-[#282a36] dark:bg-[#262626]">
          <span
            className={clsx("hidden px-2 text-xs text-green-400 ease-in", {
              "group-hover:flex": copied,
            })}
          >
            已複製！
          </span>
          <button
            type="button"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
            className={clsx(
              "hidden rounded-md text-lighter-100 border bg-transparent p-2 transition ease-in focus:outline-none group-hover:flex",
              {
                "border-green-400": copied,
                "border-lighter-400 hover:border-lighter-200 focus:ring-4 focus:ring-lighter-200/50":
                  !copied,
              }
            )}
          >
            <FaCopy
              className={`h-4 w-4 fill-lighter-100 ${clsx({
                block: !copied,
                hidden: copied,
              })}`}
            />
            <FaCheck
              className={`h-4 w-4 fill-lighter-100 ${clsx({
                "block fill-green-400": copied,
                hidden: !copied,
              })}`}
            />
          </button>
        </div>
        {children}
      </pre>
    </div>
  );
}

export default CustomPre;
