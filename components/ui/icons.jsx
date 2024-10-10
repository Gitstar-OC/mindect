import { CircuitBoard, BrainCircuit, BrainCog, Sigma, X, ChartColumn } from "lucide-react";
import { cn } from "@/lib/utils"

export function USLIcon({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-red-600 to-black h-8 w-8 rounded-sm` , className)}>
      <CircuitBoard className={cn(`text-[#FF8284] w-full  h-[90%] my-[5%]` , className)} />
    </div>
  );
}

export function SLIcon({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-[#336C6A] to-[#050F0F] h-8 w-8 rounded-sm`, className)}>
      <BrainCircuit className={cn(`text-[#00FFF6] w-full  h-[90%] my-[5%]`, className)} />
    </div>
  );
}

export function AlgsIcon({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-[#AA3FAA] to-[#1E0E1E] h-8 w-8 rounded-sm`, className)}>
      <BrainCog className={cn(`text-[#EB51EB] w-full h-[90%] my-[5%]`, className)} />
    </div>
  );
}

export function CalculusIcon({className}) { 
  return (
    <div className={cn(`bg-gradient-to-b from-[#58EF3D] to-[#0F0C05] h-8 w-8 rounded-sm` , className)}>
      <Sigma className={cn(`text-[#B4FFBD] w-full  h-[90%] my-[5%]` , className)} />
    </div>
  );
}

export function AlgebraIcon({className}) { 
  return (
    <div className={cn(`bg-gradient-to-b from-[#009DFF] to-[#000000] h-8 w-8 rounded-sm` , className)}>
      <X className={cn(`text-[#82B0FF] w-full  h-[90%] my-[5%]` , className)} />
    </div>
  );
}
export function ProbabilityIcon({className}) { 
  return (
    <div className={cn(`bg-gradient-to-b from-[#FF6200] to-[#0F0C05] h-8 w-8 rounded-sm` , className)}>
      <ChartColumn className={cn(`text-[#FFC982] w-full  h-[90%] my-[5%]` , className)} />
    </div>
  );
}


