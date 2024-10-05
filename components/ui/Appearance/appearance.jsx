"use client"
import React, { useState } from "react";
import "../../../app/global.css";
import { TbSettings } from "react-icons/tb";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Appearance = ({ className }) => {
  const [fontSize, setFontSize] = useState("medium");

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const fontSizes = {
    small: {
      "--h1-size": "20px",
      "--p-size": "12px",
      "--div-h1-size": "18px",
      "--div-h2-size": "16px",
      "--div-h3-size": "14px",
      "--div-h4-size": "12px",
      "--div-h5-size": "10px",
      "--div-h6-size": "8px",
      "--div-p-size": "10px",
      "--div-div-size": "10px",
    },
    medium: {
      "--h1-size": "28px",
      "--p-size": "16px",
      "--div-h1-size": "24px",
      "--div-h2-size": "22px",
      "--div-h3-size": "20px",
      "--div-h4-size": "18px",
      "--div-h5-size": "16px",
      "--div-h6-size": "14px",
      "--div-p-size": "16px",
      "--div-div-size": "16px",
    },
    large: {
      "--h1-size": "36px",
      "--p-size": "20px",
      "--div-h1-size": "32px",
      "--div-h2-size": "28px",
      "--div-h3-size": "24px",
      "--div-h4-size": "22px",
      "--div-h5-size": "20px",
      "--div-h6-size": "18px",
      "--div-p-size": "20px",
      "--div-div-size": "20px",
    },
    larger: {
      "--h1-size": "44px",
      "--p-size": "24px",
      "--div-h1-size": "40px",
      "--div-h2-size": "36px",
      "--div-h3-size": "32px",
      "--div-h4-size": "28px",
      "--div-h5-size": "24px",
      "--div-h6-size": "22px",
      "--div-p-size": "24px",
      "--div-div-size": "24px",
    },
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="contents">
          <div
            className={cn(
              `border-1 border rounded-md p-[6px] flex justify-center items-center group`,
              className
            )}
          >
            <span
              className={cn(
                `opacity-70 group-hover:opacity-100 cursor-pointer group text-xs flex`
              )}
            >
              <TbSettings
                className={`size-3 mt-[1px] mr-1 transition-transform duration-300 ease-in-out group-hover:rotate-[360deg] group-hover:scale-125`}
              />
              Change Appearance
            </span>
          </div>
        </DialogTrigger>
        <DialogContent className="w-80">
          <DialogHeader>
            <DialogTitle className="text-[20px]">Change Font Size</DialogTitle>
            <DialogDescription style={{ marginTop: "10px", fontSize: "15px" }}>
              This component is being developed and may not work for a while, it is being tested in production and development 
              <RadioGroup
                defaultValue="medium"
                onValueChange={handleFontSizeChange}
                className="mt-6 gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="r1" />
                  <Label htmlFor="r1" className="text-[16px]">
                    Small
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="r2" />
                  <Label htmlFor="r2" className="text-[16px]">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="r3" />
                  <Label htmlFor="r3" className="text-[16px]">
                    Large
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="larger" id="r4" />
                  <Label htmlFor="r4" className="text-[16px]">
                    Larger
                  </Label>
                </div>
              </RadioGroup>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Appearance;


// .prose 
// article > h1
// article > p
// article > div > h1
// article > div > h2
// article > div > h3
// article > div > h4
// article > div > h5
// article > div > h6
// article > div > p
// article > div > div
