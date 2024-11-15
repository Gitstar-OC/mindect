// this component is used to change the appearance of the app
"use client";
import React, { useState, useEffect } from "react";
import "../../../app/global.css"; // Global CSS file
import "./style.css"; // Your custom styles
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
import { Label } from "@/components/ui/Appearance/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Appearance/radio-group";
import { Slider } from "@/components/ui/slider";

const Appearance = ({ className }) => {
  const [fontSize, setFontSize] = useState("medium");

  const fontSizes = {
    small: {
      "--h2-size": "20px",
      "--h3-size": "16px",
      "--p-size": "12px",
      "--not-prose": "10px"
    },
    medium: {
      "--h2-size": "28px", 
      "--h3-size": "25px", 
      "--p-size": "18px", 
      "--not-prose": "15px"
    },
    large: {
      "--h2-size": "31px",
      "--h3-size": "28px",
      "--p-size": "20px",
      "--not-prose": "18px"

    },
    larger: {
      "--h2-size": "34px",
      "--h3-size": "31px",
      "--p-size": "24px",
      "--not-prose": "21px"
    },
  };

  // Apply the selected font size to the global document root
  useEffect(() => {
    const selectedFontSize = fontSizes[fontSize];
    // Loop through each property in the selected font size and set it globally
    Object.keys(selectedFontSize).forEach((key) => {
      document.documentElement.style.setProperty(key, selectedFontSize[key]);
    });
  }, [fontSize]);

  return (
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
            Select a font size that you prefer.
            {/* Use 'value' instead of 'defaultValue' to bind the current state */}
            <RadioGroup
              value={fontSize} // This will bind the current selected value to the RadioGroup
              onValueChange={setFontSize} // Automatically update the state
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
          <DialogDescription className="justify-start">
            <div className="flex mb-2 mt-2">
              Or use a slider instead to set it
            </div>
            <Slider defaultValue={[55]} max={100} step={11} className="flex" />
          </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Appearance;
