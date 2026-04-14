import { cn } from "@/lib/utils";
import { TypographyP } from "../typo/typography";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={cn("my-20 text-xs text-muted-foreground/60", className)}>
      <TypographyP>@ {currentYear} th-herve</TypographyP>
    </footer>
  );
};

export default Footer;
