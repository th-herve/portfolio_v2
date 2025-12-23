import { ReactNode } from "react";
import { CodeSvg, MailSvg, MapPinSvg } from "../svg/svg";
import { TypographyP } from "../typo/typography";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const InfoSection = ({ className }: Props) => {
  return (
    <section className={cn("space-y-2", className)}>
      <InfoLine text="Fullstack developer" icon={<CodeSvg />} />
      <InfoLine text="Lorient, France" icon={<MapPinSvg />} />
      <InfoLine text="thibault.herve1@gmail.com" icon={<MailSvg />} />
    </section>
  );
};

const InfoLine = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-6">{icon}</div>
      <TypographyP>{text}</TypographyP>
    </div>
  );
};

export default InfoSection;
