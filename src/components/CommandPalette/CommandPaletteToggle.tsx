import { useKBar } from "kbar";
import { Kbd, Button } from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function CommandPaletteToggle() {
  const { query } = useKBar();

  return (
    <Button
      aria-label="Toggle Command Palette"
      color="default"
      variant="flat"
      size="md"
      startContent={<HiMagnifyingGlass />}
      onClick={query.toggle}
      className="border border-transparent dark:bg-darker-400/80 dark:border-darker-100/40 hidden xl:flex"
    >
      Quick search...
      <Kbd keys={["command"]}>K</Kbd>
    </Button>
  );
}
