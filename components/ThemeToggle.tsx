import { useDarkMode } from "@/hooks/useTheme";

type props = {
    // toggle: () => void;
    // darkMode: boolean;
}

export function ThemeToggle({
}: props) {
    const [darkMode, toggle] = useDarkMode();
    return <div onClick={toggle} className="p-1 m-1 rounded-md border-1 w-14 flex justify-center items-center select-none
             border-black font-bold dark:text-gendark dark:border-gendark dark:border-2">
        {darkMode ? 'Dark' : 'Light'}
    </div>
}