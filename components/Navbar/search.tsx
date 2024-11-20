'use client'

import * as React from "react"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [open, setOpen] = React.useState(false)

  const simulateCtrlK = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: true,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div>
      <div>
        {/* Mobile: Icon only */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 lg:hidden"
          aria-label="Search"
          onClick={simulateCtrlK}
        >
          <Search style={{ height: "1.25rem", width: "1.25rem" }} />
        </Button>
        {/* Desktop: Full search bar */}
        <Button
          variant='outline'
          role="combobox"
          aria-expanded={open}
          className="hidden rounded-xl lg:inline-flex items-center justify-between w-full text-sm text-muted-foreground h-10 px-4 py-2"
          onClick={simulateCtrlK}
        >
          <div className="inline-flex mr-20 items-center">
            <Search className="mr-2 h-4 w-4" />
            <span>Search</span>
          </div>
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>
    </div>
  )
}