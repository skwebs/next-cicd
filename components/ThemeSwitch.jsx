
import { useTheme } from "next-themes";
import { RiContrastFill } from 'react-icons/ri'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { useState, useEffect } from "react";
HiOutlineSun
const ThemeSwitch = () => {

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  console.log(theme, systemTheme, resolvedTheme)

  useEffect(() => {
    setMounted(true);
  }, [])

  function changeTheme() {
    theme === "system" ? setTheme('dark') : theme === "dark" ? setTheme('light') : theme === "light" && setTheme('system');
    console.log(theme)
  }
  if (!mounted) return null;
  // dark:text-sky-500 dark:hover:border-slate-700 dark:active:text-slate-300
  return (

    <>
      <button
        title={`${theme === 'system' ? 'Enable Dark Mode' : theme === 'dark' ? 'Enable Light Mode' : theme === 'light' && 'Enable System Mode'}`}
        onClick={() => changeTheme()}
        className={`hover:border-slate-200 active:border-slate-300 dark:hover:border-slate-700 dark:active:border-slate-600 ${theme !== 'system' && 'text-sky-500'} rounded-md border-transparent border-2  p-1 bg-slate-100 dark:bg-slate-800`}
      >
        {/* {
          theme === "system" ? (<RiContrastFill className="w-6 h-6" />) : (
            <>
              <HiOutlineSun className="w-6 h-6 dark:hidden" />
              <HiOutlineMoon className="w-6 h-6 hidden dark:block dark:bg-transparent" />
            </>
          )
        } */}
        <>
          <HiOutlineSun className="w-6 h-6 dark:hidden" />
          <HiOutlineMoon className="w-6 h-6 hidden dark:block dark:bg-transparent" />
        </>
      </button>
    </>
  )
};

export default ThemeSwitch;
