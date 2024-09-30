import { CircuitBoard, BrainCircuit, BrainCog } from "lucide-react";

export function USLImage() {
  return (
    <div className="bg-gradient-to-b from-red-600 to-black h-8 w-8 rounded-sm">
      <CircuitBoard className="text-[#FF8284] w-full  h-[90%] my-[5%]" />
    </div>
  );
}

export function SLImage() {
  return (
    <div className="bg-gradient-to-b from-[#336C6A] to-[#050F0F] h-8 w-8 rounded-sm">
      <BrainCircuit className="text-[#00FFF6] w-full  h-[90%] my-[5%]" />
    </div>
  );
}

export function AlgsImage() {
  return (
    <div className="bg-gradient-to-b from-[#AA3FAA] to-[#1E0E1E] h-8 w-8 rounded-sm">
      <BrainCog className="text-[#EB51EB] w-full h-[90%] my-[5%]" />
    </div>
  );
}
