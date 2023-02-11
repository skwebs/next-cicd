
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from ".";

const ThemeSwitch = () => {

  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  function changeTheme() {
    let themeMode = `${theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : theme === 'light' && 'system'}`;
    // show activated theme mode
    toast.success(`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`, {
      icon: theme === 'system' ? HiOutlineMoon : theme === 'dark' ? HiOutlineSun : theme === 'light' && HiComputerDesktop,
      autoClose: 2000,
      position: "top-center"
    });
    // activate theme
    setTheme(themeMode);
  }

  if (!mounted) return null;

  return (
    <>
      <Tooltip className="right-0 whitespace-nowrap" message={`${theme === 'system' ? 'Enable Dark Mode' : theme === 'dark' ? 'Enable Light Mode' : theme === 'light' && 'Enable System Mode'}`}>
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
      </Tooltip>
    </>
  )
};

export default ThemeSwitch;
