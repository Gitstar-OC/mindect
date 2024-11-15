"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon style={{ height: "1.25rem", width: "1.25rem" }} />
      ) : (
        <Sun style={{ height: "1.25rem", width: "1.25rem" }} />
      )}
    </Button>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { Moon, Sun, Laptop } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "./popover";
// import { Button } from "@/components/ui/button";

// export default function ThemeChanger() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "system";
//     setTheme(savedTheme);
//     applyTheme(savedTheme);
//   }, []);

//   const applyTheme = (theme) => {
//     if (theme === "system") {
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       document.documentElement.classList.toggle("dark", prefersDark);
//     } else {
//       document.documentElement.classList.toggle("dark", theme === "dark");
//     }
//   };

//   const handleThemeChange = (newTheme) => {
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     applyTheme(newTheme);
//   };

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="ghost" size="icon">
//           {theme === 'light' && <Moon style={{ height: "1.25rem", width: "1.25rem" }} />}
//           {theme === 'dark' && <Sun style={{ height: "1.25rem", width: "1.25rem" }} />}
//           {theme === 'system' && <Laptop style={{ height: "1.25rem", width: "1.25rem" }} />}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-40" align="end">
//         <div className="grid gap-2">
//           <Button
//             variant="ghost"
//             className="w-full justify-start"
//             onClick={() => handleThemeChange('light')}
//           >
//             <Sun className="mr-2 h-4 w-4" />
//             Light
//           </Button>
//           <Button
//             variant="ghost"
//             className="w-full justify-start"
//             onClick={() => handleThemeChange('dark')}
//           >
//             <Moon className="mr-2 h-4 w-4" />
//             Dark
//           </Button>
//           <Button
//             variant="ghost"
//             className="w-full justify-start"
//             onClick={() => handleThemeChange('system')}
//           >
//             <Laptop className="mr-2 h-4 w-4" />
//             System
//           </Button>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }