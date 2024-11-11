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
    [Shot.Type.Unknown]: 'bg-[#969696]',
    [Shot.Type.Live]: 'bg-[#cf0000]',
    [Shot.Type.Blank]: 'bg-[#00eeff]'
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
            `${highlight ? 'text-black' : 'text-[#707070]'}`, "font-extrabold text-6xl",
            `${typeColor[type]}`)}
            onClick={() => setType(nextType[type])}>
            {i + 1}
        </div>
    </>
}