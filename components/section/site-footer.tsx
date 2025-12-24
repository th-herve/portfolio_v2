import { cn } from "@/lib/utils";
import { TypographyP } from "../typo/typography";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={cn("my-20 text-xs text-muted-foreground/60", className)}>
      <TypographyP>@ 2025 th-herve</TypographyP>
    </footer>
  );
};

export default Footer;
