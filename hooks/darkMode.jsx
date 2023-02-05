import { useState, useEffect } from 'react';

export function useDarkMode() {

    const [darkMode, setDarkMode] = useState(false);

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
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
                if (matches) {
                    document.documentElement.className = "dark";
                    localStorage.setItem("theme", "dark")
                    theme = "dark";
                    console.log("change to dark mode!")
                } else {
                    document.documentElement.className = "";
                    localStorage.setItem("theme", "")
                    theme = "";
                    console.log("change to light mode!")
                }
                setDarkMode(theme);
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
