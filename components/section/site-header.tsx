import { cn } from "@/lib/utils";
import { TypographyP } from "../typo/typography";
import { ThemeToggle } from "../theme-toggle";

interface Props {
  className?: string;
}

const SiteHeader = ({ className }: Props) => {
  return (
    <header className={cn("my-5 flex justify-between items-center", className)}>
      <TypographyP>~/th-herve</TypographyP>
      <ThemeToggle />
    </header>
  );
};

export default SiteHeader;
