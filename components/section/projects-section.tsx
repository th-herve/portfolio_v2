import Image from "next/image";
import {
  GithubSvg,
  NextJsSvg,
  ReactSvg,
  SpringBootSvg,
} from "../svg/logo";
import { TypographyH2, TypographyP } from "../typo/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skill, SkillIconContainer } from "./skills-section";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { GlobeIcon } from "lucide-react";

type Project = {
  title: string;
  description: string;
  imageLink: string;
  skills: Skill[];
  liveLink?: string;
  githubLink?: string;
  isHidden?: boolean;
};

const projects: Project[] = [
  {
    title: "Bubble job",
    description:
      "A job applications tracking app. Aim to simplify job search by providing an easy tracking.",
    imageLink: "/bubblejob_dark.png",
    liveLink: "https://job.th-herve.fr",
    githubLink: "https://github.com/th-herve/job-app",
    skills: [
      {
        name: "NextJs",
        icon: <NextJsSvg />,
      },
      {
        name: "React",
        icon: <ReactSvg />,
      },
      {
        name: "Spring boot",
        icon: <SpringBootSvg />,
      },
    ],
  },
  {
    title: "Cycling calendar",
    description:
      "A straightforward web application that presents professional cycling races scheduled in a calendar format.",
    imageLink: "/cycling.png",
    liveLink: "https://cycling.th-herve.fr",
    githubLink: "https://github.com/th-herve/cycling-calendar",
    skills: [],
  },
];

interface Props {
  className?: string;
}

const ProjectSection = ({ className }: Props) => {
  return (
    <section className={className}>
      <TypographyH2>Projects</TypographyH2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={`project-card-${project.title}-${i}`}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

const ProjectCard = ({ project }: { project: Project }) => {
  if (project.isHidden) return;

  return (
    <Card className="pt-0 overflow-hidden">
      <Image
        className=""
        src={project.imageLink}
        alt="app"
        width={1920}
        height={988}
      />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{project.title}</CardTitle>
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <ProjectLink type="gh" link={project.githubLink} />
            )}
            {project.liveLink && (
              <ProjectLink type="ext" link={project.liveLink} />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex flex-col justify-between h-full">
        <TypographyP className="text-muted-foreground text-sm">
          {project.description}
        </TypographyP>
        <div className="flex gap-2">
          {project.skills.map((skill, i) => (
            <SkillIconContainer
              key={`project-skill-${project.title}-${skill.name}-${i}`}
              size="sm"
              icon={skill.icon}
              tooltip={skill.name}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectLink = ({ type, link }: { type: "gh" | "ext"; link: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="size-6 text-muted-foreground hover:text-foreground">
          <a href={link} target="_blank">
            {type === "gh" ? <GithubSvg /> : <GlobeIcon />}
          </a>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {type === "gh" ? <p>View on github</p> : <p>Live website</p>}
      </TooltipContent>
    </Tooltip>
  );
};
