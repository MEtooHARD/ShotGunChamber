import clsx from "clsx"

type props = {
    onCLick: () => void,
    display: number | string,
    enabled: boolean
}

export function NumAltBtn({
    onCLick,
    display,
    enabled
}: props) {
    return <div className={clsx("flex", "flex-1", "justify-center", "items-center",
        "font-medium text-3xl active:font-medium active:text-[1.6rem]",
        `${enabled
            ? 'border-black text-black dark:border-gendark dark:text-gendark'
            : 'border-disabled text-disabled active:bg-red-400 active:text-red-600'}`,
        "border-2",
        "w-full m-2 my-1 aspect-square",
        "rounded-md",
        "select-none cursor-pointer", `${enabled ? 'transform duration-75 hover:scale-105 active:scale-95' : ''}`)}
        onClick={onCLick}>
        {display}
    </div>
}