"use client"

import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"
import { NumAltBtn } from "./NumAltBtn"

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
        <div className="flex flex-1 flex-row flex-wrap justify-center
                border-black dark:border-gendark dark:bg-gray-700 dark:bg-opacity-90
                border-2 p-1 m-2 min-w-40 max-w-[18rem] basis-[45%]
                aspect-video rounded-2xl">
            <div className="flex flex-col justify-center items-center w-full h-full">
                {title && <p className="flex font-bold text-xl text-center dark:text-gendark">{title}</p>}
                <div className="flex justify-around w-full h-full items-center">
                    <NumAltBtn
                        display="-1"
                        enabled={L}
                        onCLick={() => { if (L) setNum(prev => prev - 1) }}>
                    </NumAltBtn>
                    <div className="flex justify-center
                        text-[2.5rem] font-bold
                        mx-2 w-3 dark:text-gendark
                        select-none">
                        {num}
                    </div>
                    <NumAltBtn
                        display="+1"
                        enabled={R}
                        onCLick={() => { if (R) setNum(prev => prev + 1) }}>
                    </NumAltBtn>
                </div>
            </div>
        </div>
    </>
}