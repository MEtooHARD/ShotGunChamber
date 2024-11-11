"use client"

import { useState } from "react"
import { useRoundData } from "./RouletteHelper"
import { NumCard } from "./NumCard";
import { Chamber, Shot } from "@/classes/Roulette";
import { ShotView } from "./ShotVew";
import { LiveBlankCard } from "./LiveBlankCard";

const toPercent = (val: number) => (Math.round(val * 10000) / 100).toFixed(2);

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
                <svg
                    className="h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95"
                    onClick={() => { if (round > 0) setRound(prev => prev - 1) }}
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polygon fillRule="evenodd" points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707" />
                </svg>
                <NumCard
                    title="Next Live"
                    value={`${toPercent(chamber.next_live_chance(round))} %`}>
                </NumCard>
                <svg
                    className="h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95"
                    onClick={() => { if (round < sum - 1) setRound(prev => prev + 1) }}
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polygon fillRule="evenodd" points="14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293" />
                </svg>
            </div>
        </div >
        <div className="flex flex-wrap justify-around items-center
            border-2 border-black
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