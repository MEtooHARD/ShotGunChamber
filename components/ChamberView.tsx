"use client"

import { useState } from "react"
import { useRoundData } from "./RouletteHelper"
import { NumCard } from "./NumCard";
import { Chamber, Shot } from "@/classes/Roulette";
import { ShotView } from "./ShotVew";
import { LiveBlankCard } from "./LiveBlankCard";
import { useTheme } from "../hooks/useTheme";
import { LeftArrow } from "./arrow/LeftArrow";
import { RightArrow } from "./arrow/RightArrow";

const toPercent = (val: number) => (Math.round(val * 10000) / 100).toFixed(2);

export const loop = (pos: number, sum: number) => (pos + sum) % sum;

export function ChamberView() {
    const roundsData = useRoundData();

    const [shots, setShots] = useState<Array<Shot>>(Array.from(
        { length: roundsData.rounds.lives + roundsData.rounds.blanks },
        () => (new Shot())
    ));

    const [round, setRound] = useState<number>(0);
    const sum = roundsData.rounds.lives + roundsData.rounds.blanks;

    const chamber = new Chamber(shots, roundsData.rounds.lives, roundsData.rounds.blanks);

    const updateShotType = (index: number, type: Shot.Type) => {
        const newShots = [...shots];
        newShots[index].type = type;
        setShots(newShots);
    };

    const { darkMode } = useTheme();
    // console.log(darkMode);

    return <>
        <div className="flex flex-col justify-center items-center
             w-full my-1">
            <div className="flex flex-wrap justify-center w-full">
                <LiveBlankCard
                    live={chamber.live}
                    blank={chamber.blank}
                    title="Initial">
                </LiveBlankCard>
                <LiveBlankCard
                    live={chamber.unknown_live}
                    blank={chamber.unknown_blank}
                    title="Unkown">
                </LiveBlankCard>
            </div>
            <div className="flex m-1 h-20 items-center">
                <LeftArrow
                    darkMode={darkMode}
                    setRound={setRound}
                    sum={sum}
                ></LeftArrow>
                <NumCard
                    title="Next Live"
                    value={`${toPercent(chamber.next_live_chance(round))} %`}>
                </NumCard>
                <RightArrow
                    darkMode={darkMode}
                    setRound={setRound}
                    sum={sum}
                ></RightArrow>
            </div>
        </div >
        <div className="flex flex-wrap justify-around items-center
            border-[3px] border-black dark:border-gendark dark:bg-gray-700 dark:bg-opacity-75
            rounded-2xl
            w-[95%] my-1 p-2 max-w-[72rem]"
        >
            {chamber.shots.map((shot, i) =>
                <ShotView highlight={i === round}
                    key={i} i={i}
                    type={shot.type}
                    setType={(t) => {
                        updateShotType(i, t);
                    }}>
                </ShotView>)}
        </div>
    </>
}