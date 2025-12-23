import { cn } from "@/lib/utils";
import { TypographyP } from "../typo/typography";

interface Props {
  className?: string;
}

const SiteHeader = ({ className }: Props) => {
  return (
    <header className={cn("my-5", className)}>
      <TypographyP>~/th-herve</TypographyP>
    </header>
  );
};

export default SiteHeader;
