"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { Button } from "@/src/components/ui/button";

const DefaultTooltip = () => {
  return (
    <div className="flex  justify-center flex-wrap">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>I am a Tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default DefaultTooltip;
