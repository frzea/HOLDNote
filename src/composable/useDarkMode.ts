import { useState, useEffect } from "react";

type UseDarkModeReturn = {
    mode: boolean
    ChangeMode: () => void
} 

export function useDarkMode(defaulValue = false): UseDarkModeReturn{
    const [mode, setMode] = useState<boolean>(defaulValue);

    useEffect(() => {
    if (mode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }, [mode]);

    const ChangeMode = () => setMode(res => !res);

    return {mode, ChangeMode}
}