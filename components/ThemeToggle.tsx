import { useTheme } from "../hooks/useTheme";


export function ThemeToggle() {
    const [darkMode, toggleTheme] = useTheme();

    return <div onClick={() => { toggleTheme() }} className="p-1 m-1 rounded-md border-1 w-14 flex justify-center items-center select-none
             border-black font-bold dark:text-gendark dark:border-gendark dark:border-2">
        {darkMode ? 'Dark' : 'Light'}
    </div>
}