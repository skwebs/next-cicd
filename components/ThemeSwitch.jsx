
import { useTheme } from "next-themes";
import { RiContrastFill } from 'react-icons/ri'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThemeSwitch = () => {


  const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover

  />

  console.log(theme, systemTheme, resolvedTheme)

  useEffect(() => {
    setMounted(true);
  }, [])



  function changeTheme() {
    let themeMode = `${theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : theme === 'light' && 'system'}`;
    // show activated theme mode
    toast.success(`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)} Mode Activated!`, {
      icon: theme === 'system' ? HiOutlineMoon : theme === 'dark' ? HiOutlineSun : theme === 'light' && HiComputerDesktop,
    });
    // activate theme
    setTheme(themeMode);
  }
  if (!mounted) return null;

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
      <ToastContainer autoClose={2000} />
    </>
  )
};

export default ThemeSwitch;
