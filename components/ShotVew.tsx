"use client"

import { Shot } from "@/classes/Roulette"
import clsx from "clsx"

type props = {
    type: Shot.Type,
    setType: (type: Shot.Type) => void,
    i: number,
    highlight?: boolean
}

const typeColor = {
    [Shot.Type.Unknown]: 'bg-gradient-to-br from-45% from-gray-600 to-gray-900',
    [Shot.Type.Live]: 'bg-gradient-to-br from-45% from-red-600 to-red-900',
    [Shot.Type.Blank]: 'bg-gradient-to-br from-45% from-blue-600 to-blue-900'
}

const nextType = {
    [Shot.Type.Unknown]: Shot.Type.Live,
    [Shot.Type.Live]: Shot.Type.Blank,
    [Shot.Type.Blank]: Shot.Type.Unknown
}

export function ShotView({
    type, setType,
    i, highlight = false
}: props) {
    return <>
        <div className={clsx("flex justify-center items-center select-none",
            "w-16 max-w-16 min-w-8 aspect-[3/5] m-1 rounded-sm",
            `${highlight ? 'text-black dark:text-[]' : 'text-[#707070] dark:text-[#adadad]'}`, "font-extrabold text-6xl",
            `${typeColor[type]}`,
            "cursor-pointer transform duration-75 hover:scale-105 active:scale-95")}
            onClick={() => setType(nextType[type])}>
            {i + 1}
        </div>
    </>
}