import { useState, useEffect } from 'react';
import { useSidebarStore } from './sidebar-store';

export function useDarkMode() {
    // const [isOnline, setIsOnline] = useState(true);
    // useEffect(() => {
    //     function handleOnline() {
    //         setIsOnline(true);
    //     }
    //     function handleOffline() {
    //         setIsOnline(false);
    //     }
    //     window.addEventListener('online', handleOnline);
    //     window.addEventListener('offline', handleOffline);
    //     return () => {
    //         window.removeEventListener('online', handleOnline);
    //         window.removeEventListener('offline', handleOffline);
    //     };
    // }, []);

    const [darkMode, setDarkMode] = useState(false);

    const { open } = useSidebarStore()


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

    return [darkMode, switchTheme];
}
