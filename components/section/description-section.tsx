import { cn } from "@/lib/utils";
import { TypographyP } from "../typo/typography";

interface Props {
  className?: string;
}

const DescriptionSection = ({ className }: Props) => {
  return (
    <TypographyP
      className={cn(
        "text-muted-foreground text-base/loose text-justify",
        className,
      )}
    >
      I am a motivated developer eager to apply my skills to real-world projects
      and deliver value to your team. I have built a solid foundation in several
      technologies and am excited to bring my problem-solving abilities to your
      company.
    </TypographyP>
  );
};

export default DescriptionSection;
