
import { useTheme } from "next-themes";
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { RiContrastFill } from 'react-icons/ri'
import { useState, useEffect } from "react";
RiContrastFill
const ThemeSwitch = () => {

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  console.log(theme, systemTheme, resolvedTheme)

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  return (
    <>
      {
        theme === "system" ? <BsMoonFill title="Enable Dark Mode" className="w-6 h-6 text-gray-900 dark:fill-amber-400" role="button" onClick={() => setTheme('dark')} /> :
          theme === "dark" ? <BsSunFill title="Enable Light Mode" className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} /> :
            theme === "light" && <RiContrastFill title="Enable System Mode" className="w-6 h-6 scale-110 dark:text-yellow-500 " role="button" onClick={() => setTheme('system')} />
      }
    </>
  )
};

export default ThemeSwitch;
