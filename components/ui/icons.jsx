import { CircuitBoard, BrainCircuit, BrainCog } from "lucide-react";
import { cn } from "@/lib/utils"

export function USLImage({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-red-600 to-black h-8 w-8 rounded-sm` , className)}>
      <CircuitBoard className={cn(`text-[#FF8284] w-full  h-[90%] my-[5%]` , className)} />
    </div>
  );
}

export function SLImage({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-[#336C6A] to-[#050F0F] h-8 w-8 rounded-sm`, className)}>
      <BrainCircuit className={cn(`text-[#00FFF6] w-full  h-[90%] my-[5%]`, className)} />
    </div>
  );
}

export function AlgsImage({className}) {
  return (
    <div className={cn(`bg-gradient-to-b from-[#AA3FAA] to-[#1E0E1E] h-8 w-8 rounded-sm`, className)}>
      <BrainCog className={cn(`text-[#EB51EB] w-full h-[90%] my-[5%]`, className)} />
    </div>
  );
}
