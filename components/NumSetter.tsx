"use client"

import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"

type props = {
    title?: string,
    num: number,
    setNum: Dispatch<SetStateAction<number>>,
    L: boolean,
    R: boolean
}

export function NumSetter({
    num,
    setNum,
    title,
    L, R,

}: props) {
    return <>
        <div className="flex flex-row justify-center
                border-black
                border-2 p-1 rounded-2xl">
            <div className="flex flex-col">
                {title && <div className="flex justify-center font-bold">{title}</div>}
                <div className="flex">
                    <div className={clsx("flex", "justify-center",
                        "font-medium",
                        `${L ? 'border-black' : 'border-disabled'}`, "border-2",
                        `${L ? 'text-black' : 'text-disabled'}`,
                        "w-8", "m-2",
                        "rounded-md",
                        "select-none")}
                        onClick={() => { if (L) setNum(prev => prev - 1) }}>
                        -1
                    </div>
                    <div className="flex justify-center
                        text-xl font-semibold
                        m-2 ml-1 mr-1 w-3
                        select-none">
                        {num}
                    </div>
                    <div className={clsx("flex", "justify-center",
                        "font-medium",
                        `${R ? 'border-black' : 'border-disabled'}`, "border-2",
                        `${R ? 'text-black' : 'text-disabled'}`,
                        "w-8", "m-2",
                        "rounded-md",
                        "select-none")}
                        onClick={() => { if (R) setNum(prev => prev + 1) }}>
                        +1
                    </div>
                </div>
            </div>
        </div>
    </>
}