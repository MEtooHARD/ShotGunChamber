"use client"

import { NumCard } from "./NumCard"

type props = {
    live: number,
    blank: number,
    title: string
}

export function LiveBlankCard({ live, blank, title }: props) {
    return <div className="flex flex-col justify-around
        aspect-video m-1 border-2 min-w-48 max-w-64  basis-5/12
        rounded-xl 
      border-black">
        <p className="flex justify-center items-center font-bold text-2xl select-none">{title}</p>
        <div className="flex w-full">
            {[0, 1].map(v =>
                <div key={v} className="flex-1 w-full m-1">
                    <NumCard title={["Live", "Blank"][v]} value={[live, blank][v]}></NumCard>
                </div>)}
        </div>
    </div>
}