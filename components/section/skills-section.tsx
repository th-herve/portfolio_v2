import { Fragment, ReactNode } from "react";
import {
  DockerSvg,
  GithubActionsSvg,
  GitSvg,
  GoSvg,
  JavascriptSvg,
  JavaSvg,
  LaravelSvg,
  LinuxSvg,
  MySql,
  NextJsSvg,
  PhpSvg,
  PostgresqlSvg,
  ReactSvg,
  SpringSvg,
  TypescriptSvg,
} from "../svg/logo";
import { TypographyH2 } from "../typo/typography";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Skill = { icon: ReactNode; name: string; isHidden?: boolean };

const skills: Skill[] = [
  {
    icon: <TypescriptSvg />,
    name: "Typescript",
  },
  {
    icon: <JavascriptSvg />,
    name: "Javascript",
    isHidden: true,
  },
  {
    icon: <JavaSvg />,
    name: "Java",
  },
  {
    icon: <GoSvg />,
    name: "Go",
  },
  {
    icon: <PhpSvg />,
    name: "Php",
  },
  {
    icon: <ReactSvg />,
    name: "React",
  },
  {
    icon: <NextJsSvg />,
    name: "NextJs",
  },
  {
    icon: <SpringSvg />,
    name: "Spring",
  },
  {
    icon: <LaravelSvg />,
    name: "Laravel",
    isHidden: false,
  },
  {
    icon: <GitSvg />,
    name: "Git",
  },
  {
    icon: <LinuxSvg />,
    name: "Linux",
  },
  {
    icon: <DockerSvg />,
    name: "Docker",
  },
  {
    icon: <GithubActionsSvg />,
    name: "CI/CD",
  },
  {
    icon: <PostgresqlSvg />,
    name: "PostgreSQL",
  },
  {
    icon: <MySql />,
    name: "MySql",
    isHidden: true
  },
];

interface Props {
  className?: string;
}

const SkillsSection = ({ className }: Props) => {
  return (
    <div className={className}>
      <TypographyH2>Skills</TypographyH2>

      <div className="flex flex-wrap gap-4 p-2">
        {skills.map(
          (skill, i) =>
            !skill.isHidden && (
              <IconContainer
                key={skill.name + i}
                icon={skill.icon}
                tooltip={skill.name}
              />
            ),
        )}
      </div>
    </div>
  );
};
export default SkillsSection;

const IconContainer = ({
  icon,
  tooltip,
}: {
  icon: ReactNode;
  tooltip: string;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className="size-10 transition-transform duration-200 ease-out hover:-translate-y-2 ">
          {icon}
        </div>
      </TooltipTrigger>
      <TooltipContent className="-translate-y-2">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
