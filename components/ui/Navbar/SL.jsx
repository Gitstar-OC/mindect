// this is the SL text component usd in app/layout.config.tsx

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SL = () => {

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>SL</TooltipTrigger>
          <TooltipContent>
            <p>Supervised Learning</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SL;
