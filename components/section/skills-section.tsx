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
  NextJsSvg,
  PhpSvg,
  PostgresqlSvg,
  ReactSvg,
  SpringSvg,
  TypescriptSvg,
} from "../svg/logo";
import { TypographyH2, TypographyP } from "../typo/typography";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Skill = { icon: ReactNode; name: string; hide?: boolean };

type Skills = { category: string; items: Skill[] }[];

const skills: Skills = [
  {
    category: "Languages",
    items: [
      {
        icon: <TypescriptSvg />,
        name: "Typescript",
      },
      {
        icon: <JavascriptSvg />,
        name: "Javascript",
        hide: true,
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
    ],
  },

  {
    category: "Frameworks",
    items: [
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
        hide: false,
      },
    ],
  },

  {
    category: "Others",
    items: [
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
    ],
  },
];

interface Props {
  className?: string;
}

const SkillsSection = ({ className }: Props) => {
  return (
    <div className={className}>
      <TypographyH2>Skills</TypographyH2>

      <div className="grid grid-cols-[auto_1fr] items-center gap-x-2">
        {skills.map((category, i) => (
          <Fragment key={i}>
            <TypographyP className="text-muted-foreground">
              {category.category}
            </TypographyP>

            <div className="flex gap-4 p-2">
              {category.items.map(
                (skill, i) =>
                  !skill.hide && (
                    <IconContainer
                      key={skill.name + i}
                      icon={skill.icon}
                      tooltip={skill.name}
                    />
                  ),
              )}
            </div>
          </Fragment>
        ))}
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
