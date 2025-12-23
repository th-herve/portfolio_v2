import { ReactNode } from "react";
import { CodeSvg, MailSvg, MapPinSvg } from "../svg/svg";
import { TypographyP } from "../typo/typography";

const InfoSection = () => {
  return (
    <section className="space-y-2">
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
