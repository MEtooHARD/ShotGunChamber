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
        "font-medium text-3xl",
        `${enabled ? 'border-black dark:border-gendark' : 'border-disabled'}`, "border-2",
        `${enabled ? 'text-black dark:text-gendark' : 'text-disabled'}`,
        "w-full m-2 aspect-square",
        "rounded-md",
        "select-none cursor-pointer", `${enabled ? 'transform duration-75 hover:scale-105 active:scale-95' : ''}`)}
        onClick={onCLick}>
        {display}
    </div>
}