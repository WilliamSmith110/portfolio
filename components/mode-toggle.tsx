"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
  
    setMounted(true)
    // Set default theme to dark if no theme is set
    if (!localStorage.getItem("theme")) {
      setTheme("dark")
      console.log("123", localStorage.getItem("theme"));
      console.log(theme);
    }
    console.log(theme);
  }, [setTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="focus-visible:ring-0">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    console.log("hello");
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light")
  }

  const isDark = theme === "dark"

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="focus-visible:ring-0">
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
