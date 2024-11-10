"use client"

import React, { createContext, useContext, useMemo, useState } from "react"
import { RoundsDataSet } from "@/classes/Roulette";
import { RoundsSetter } from "./RoundsSetter";
import { ChamberView } from "./ChamberView";
import clsx from "clsx";

const RoundsData = createContext<RoundsDataSet | undefined>(undefined);

export const useRoundData = (): RoundsDataSet => {
    const context = useContext(RoundsData);
    if (!context) throw new Error('couldn\'t get round data');
    return context;
}

export function RouletteHelper() {
    const maxRounds = 10;

    const [ready, setReady] = useState(false);

    const [lives, setLives] = useState(2);
    const [blanks, setBlanks] = useState(2);
    const rounds = useMemo(() => ({ lives, blanks }), [lives, blanks]);

    return <>
        <div className="flex flex-col w-screen h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full overflow-scroll">
                <RoundsData.Provider value={{ rounds: rounds, set: { Lives: setLives, Blanks: setBlanks } }}>
                    {ready
                        ? <ChamberView></ChamberView>
                        : <div className="flex justify-center">
                            <RoundsSetter max={maxRounds}></RoundsSetter>
                        </div>
                    }
                </RoundsData.Provider>
            </div >
            <div className="h-12"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-12 flex">
            <div className={clsx("flex-1 flex items-center justify-center",
                "bg-black", "select-none",
                `${ready ? 'text-disabled' : 'text-white'}`, "font-bold",
                "h-full")}
                onClick={() => { setReady(true) }}>
                Start
            </div>
            <div className={clsx("flex-1 flex items-center justify-center",
                "bg-green-400", "select-none",
                `${ready ? "text-black" : 'text-disabled'}`, "font-bold",
                "h-full")}
                onClick={() => {
                    setReady(false)
                    setLives(2)
                    setBlanks(2)
                }}>
                Reset
            </div>
        </div>
    </>
}