import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { GithubSvg } from "../svg/logo";
import { Separator } from "../ui/separator";
import { MailIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  className?: string;
}

const ConnectSection = ({ className }: Props) => {
  return (
    <section className={cn("font-mono flex gap-4 items-center h-6", className)}>
      <Button variant="outline">
        <a href="#contact-section">Contact</a>
      </Button>

      <Separator orientation="vertical" />

      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline">
              <a target="_blank" href="https://github.com/th-herve">
                <GithubSvg />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant="outline">
              <a target="_blank" href="mailto:thibault.herve1@gmail.com">
                <MailIcon />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Email</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
};

export default ConnectSection;
