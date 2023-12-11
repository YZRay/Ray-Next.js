import { useKBar } from "kbar";
import { Kbd, Button } from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function CommandPaletteToggle() {
  const { query } = useKBar();

  return (
    <Button
      aria-label="Toggle Command Palette"
      color="default"
      variant="shadow"
      size="md"
      startContent={<HiMagnifyingGlass />}
      onClick={query.toggle}
    >
      快速搜尋
      <Kbd keys={["command"]}>K</Kbd>
    </Button>
  );
}
