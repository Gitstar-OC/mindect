// this is the Algs text component usd in app/layout.config.tsx

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  const Algs = () => {
  
    return (
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Algs</TooltipTrigger>
            <TooltipContent>
              <p>Learning Algorithms</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };
  
  export default Algs;