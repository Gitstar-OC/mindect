// this is the USL text component usd in app/layout.config.tsx

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  const USL = () => {
  
    return (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>USL</TooltipTrigger>
            <TooltipContent>
              <p>Unsupervised Learning</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };
  
  export default USL;