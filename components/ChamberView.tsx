"use client"

import { useState } from "react"
import { useRoundData } from "./RouletteHelper"
import { NumCard } from "./NumCard";
import { Chamber, Shot } from "@/classes/Roulette";
import { ShotView } from "./ShotVew";

const toPercent = (val: number) => Math.round(val * 100).toFixed(2);

export function ChamberView() {
    const roundsData = useRoundData();

    const [shots, setShots] = useState<Array<Shot>>(Array.from(
        { length: roundsData.rounds.lives + roundsData.rounds.blanks },
        () => (new Shot())
    ));

    const chamber = new Chamber(shots, roundsData.rounds.lives, roundsData.rounds.blanks);

    const updateShotType = (index: number, type: Shot.Type) => {
        const newShots = [...shots];
        newShots[index].type = type;
        setShots(newShots);
    };

    return <>
        <div className="flex flex-col justify-center items-center
             w-full my-2">
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col w-40 m-2 rounded-xl border-2 border-black">
                    <p className="flex justify-center items-center font-bold text-lg select-none">Initial</p>
                    <div className="flex w-full">
                        <NumCard title="Live" value={chamber.live}></NumCard>
                        <NumCard title="Blank" value={chamber.blank}></NumCard>
                    </div>
                </div>
                <div className="flex flex-col w-40 m-2 rounded-xl border-2 border-black">
                    <p className="flex justify-center items-center font-bold text-lg select-none">Unknown</p>
                    <div className="flex w-full">
                        <NumCard title="Live" value={chamber.unknown_live}></NumCard>
                        <NumCard title="Blank" value={chamber.unknown_blank}></NumCard>
                    </div>
                </div>
            </div>
            <div className="font-bold text-2xl my-2">
                <NumCard title="Next Live Chance" value={`${toPercent(chamber.next_live_chance)} %`}></NumCard>
            </div>
        </div>
        <div className="flex flex-wrap justify-around items-center
            border-2 border-black
            rounded-2xl
            w-11/12 my-2 p-2"
        >
            {chamber.shots.map((shot, i) =>
                <ShotView key={i} type={shot.type}
                    setType={(t) => {
                        updateShotType(i, t);
                    }}>
                </ShotView>)}
        </div>
    </>
}