"use client"

import { NumSetter } from "./NumSetter";
import { useRoundData } from "./RouletteHelper";

type props = {
    max: number
}

export function RoundsSetter({
    max
}: props) {
    const roundsData = useRoundData();
    const lives = roundsData.rounds.lives;
    const blanks = roundsData.rounds.blanks;
    const sum = lives + blanks;
    const setLives = roundsData.set.Lives;
    const setBlanks = roundsData.set.Blanks;

    return <>
        <NumSetter
            title="Live Rounds"
            num={lives} setNum={setLives}
            L={lives > 0}
            R={lives < max && sum < max}
        ></NumSetter>
        <div className="w-4"></div>
        <NumSetter
            title="Blank Rounds"
            num={blanks} setNum={setBlanks}
            L={blanks > 0}
            R={blanks < max && sum < max}
        ></NumSetter>
    </>
}