import Link from "next/link";
import { useRouter } from "next/router";
import { AppNavLinks } from "../constants";
import Brand from "./Brand";
import { MdMenu } from "react-icons/md";
import { BsSunFill, BsMoonFill, BsFillPersonFill } from 'react-icons/bs'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { useEffect } from "react";

import { useSidebarStore } from "@/hooks/sidebar-store";
import ConstantWideLayout from "@/components/layouts/ConstantWideLayout";


const Navigation = () => {
  ConstantWideLayout
  const [darkMode, setDarkMode] = useState(false);

  const { open } = useSidebarStore()

  const router = useRouter();
  const { asPath, pathname } = router;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  // ================================================================================

  let theme

  if (typeof (Storage) !== "undefined") {

    if (localStorage) {
      theme = localStorage.getItem("theme")
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "";
    }

  }
  const switchTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "")
      theme = "";
    } else {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark")
      theme = "dark";
    }
    document.documentElement.className = theme;
    setDarkMode(theme);

  }


  useEffect(() => {

    if (typeof (Storage) !== "undefined") {

      if (localStorage) {
        theme = localStorage.getItem("theme")
      }
    }
    let isSubscribed = false;
    if (!isSubscribed) {
      // all code goes below

      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ({ matches }) => {
          if (matches) {
            console.log("change to dark mode!")
          } else {
            console.log("change to light mode!")
          }
        })

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.className = "dark";
      } else {
        document.documentElement.className = "";
      }
      // document.documentElement.className = theme;
      setDarkMode(theme);
    }
    return () => {
      isSubscribed = true;
    }
  }, [theme])

  // ================================================================================

  return (
    <>
      <div className="w-full shadow dark:border-b dark:border-gray-700">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="flex justify-between">
              {/* left side */}
              <div className="flex items-center h-14">
                <MdMenu
                  onClick={open}
                  className=" md:hidden text-5xl p-3 mr-3 hover:bg-slate-100 active:text-slate-600 active:bg-slate-200 rounded-full cursor-pointer  dark:hover:bg-white/10 dark:active:text-slate-300 dark:active:bg-white/20"
                />
                <Link href={`/`}>
                  <Brand className="text-2xl" />
                </Link>
              </div>

              {/* right side */}
              <div className="flex items-center">
                {/* navigation */}
                <nav>
                  <ul className="hidden md:flex items-center">
                    {AppNavLinks.map((link, index) => (
                      <li key={index} className="group">
                        <Link href={link.href} className={`${pathname === link.href
                          ? " text-sky-500 active:bg-sky-500/5 dark:active:bg-sky-600/10"
                          : " text-slate-700 dark:text-slate-400 active:bg-slate-600/5 dark:active:bg-slate-100/5"
                          } rounded-md font-semibold px-3 py-2 hover:underline hover:underline-offset-8 whitespace-nowrap `}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="ml-2 flex justify-center items-center space-x-2 ">
                  <button title={darkMode ? 'Disable Light Mode' : 'Enable Dark Mode'}
                    className={`group p-2 text-slate-600 bg-slate-700/10 hover:bg-transparent hover:outline outline-2 outline-slate-300  active:outline-slate-500 dark:bg-white/10 dark:hover:outline-slate-700 dark:active:outline-slate-600 rounded-md group`}
                    onClick={e => switchTheme(e)}>
                    {darkMode === "dark" ? (<BsSunFill className="dark:group-hover:text-slate-300 text-slate-400" />) : (<BsMoonFill />)}
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className={`flex rounded-full bg-gray-800 text-sm focus:outline-none ring-transparent ring-4 hover:ring-gray-100 active:ring-gray-200 dark:hover:ring-gray-800 dark:active:ring-gray-700`}>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://v1.anshumemorial.in/assets/static/img/ama/ama-128x128.png"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="#"
                              className={classNames(active ? 'bg-gray-100 dark:bg-slate-800' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-slate-400 dark:hover:bg-slate-700')}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
