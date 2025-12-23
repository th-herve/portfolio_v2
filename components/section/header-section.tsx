import { TypographyH1, TypographyP } from "../typo/typography";

interface Props {
  className?: string;
}

const HeaderSection = ({ className }: Props) => {
  return (
    <header className={className}>
      <TypographyH1>Thibault Hervé</TypographyH1>
      <TypographyP className="text-muted-foreground pl-3 text-lg">
        Fullstack developer
      </TypographyP>
    </header>
  );
};

export default HeaderSection;
