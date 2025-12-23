import { TypographyH1, TypographyP } from "../typo/typography";

const HeaderSection = () => {
  return (
    <header>
      <TypographyH1>Thibault Hervé</TypographyH1>
      <TypographyP className="text-muted-foreground pl-3">
        Fullstack developer
      </TypographyP>
    </header>
  );
};

export default HeaderSection;
