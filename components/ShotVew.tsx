"use client"

import { Shot } from "@/classes/Roulette"
import clsx from "clsx"

type props = {
    type: Shot.Type,
    setType: (type: Shot.Type) => void
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
    type, setType
}: props) {
    return <>
        <div className={clsx("w-12 max-w-12 min-w-8 aspect-[3/5] m-1 rounded-sm", `${typeColor[type]}`)}
            onClick={() => setType(nextType[type])}>
        </div>
    </>
}