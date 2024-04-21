"use client";
import dynamic from "next/dynamic";
import {
  ActionId,
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  useMatches,
} from "kbar";
import { useActions } from "./CommandActions";
import React, { forwardRef, useMemo } from "react";
const KBarSearch = dynamic(() =>
  import("./KBarSearch").then((mod) => mod.KBarSearch)
);

type Props = {
  children: React.ReactNode;
};
export default function CommandPalette({ children }: Props) {
  const actions = useActions();

  return (
    <KBarProvider actions={actions}>
      <CommandBar />
      {children}
    </KBarProvider>
  );
}

function CommandBar() {
  return (
    <KBarPortal>
      <KBarPositioner className="z-20 flex items-center bg-gray-400/70 p-2 backdrop-blur-sm dark:bg-gray-900/80">
        <KBarAnimator className="box-content w-full max-w-[600px] overflow-hidden rounded-xl border  border-gray-400 bg-white/80 p-2 dark:border-gray-600 dark:bg-gray-700/80">
          <KBarSearch className="flex h-16 w-full bg-transparent px-4 outline-none" />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 pt-4 pb-2 font-medium text-gray-500 dark:text-gray-400">
            {item}
          </div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId || ""}
          />
        )
      }
    />
  );
}

interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
  currentRootActionId: ActionId;
}
type Ref = HTMLDivElement;

// eslint-disable-next-line react/display-name
const ResultItem = forwardRef<Ref, ResultItemProps>(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        className={`${
          active
            ? "rounded-lg bg-lighter-400 dark:bg-darker-400"
            : "text-gray-600 dark:text-gray-300"
        } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2`}
      >
        <div className="flex items-center gap-2 text-base">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <div className="line-clamp-1">
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span className="mr-3 opacity-70">{ancestor.name}</span>
                    <span className="mr-3">›</span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span className="text-sm">{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className="grid grid-flow-col gap-2">
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                className={`${
                  active
                    ? "bg-white text-teal-500 dark:bg-gray-500 dark:text-gray-200"
                    : "bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-400"
                } flex cursor-pointer items-center justify-between rounded-md px-3 py-2`}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);
