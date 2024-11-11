"use client"

import { NumSetter } from "./NumSetter";
import { useRoundData } from "./RouletteHelper";

const min = 1;
const max = 10;

export function RoundsSetter() {
    const roundsData = useRoundData();
    const lives = roundsData.rounds.lives;
    const blanks = roundsData.rounds.blanks;
    const sum = lives + blanks;
    const setLives = roundsData.set.Lives;
    const setBlanks = roundsData.set.Blanks;

    return <>
        <p className="text-gray-400 font-bold text-2xl select-none">Rounds Counter</p>
        <p className="text-gray-400 font-bold text-2xl select-none">For&ensp;
            <a className="text-gray-500" target="_blank"
                href="https://store.steampowered.com/app/2835570/Buckshot_Roulette/">
                Buckshot Roulette
            </a>
        </p>
        <p className="text-gray-400 font-bold text-2xl select-none">Beta 1.2.1</p>
        <div className="m-4"></div>
        <div className="flex flex-wrap justify-center items-center
            w-full">
            <NumSetter
                title="Live Rounds"
                num={lives} setNum={setLives}
                L={lives > min}
                R={lives < max && sum < max}
            ></NumSetter>
            {/* <div className="w-4"></div> */}
            <NumSetter
                title="Blank Rounds"
                num={blanks} setNum={setBlanks}
                L={blanks > min}
                R={blanks < max && sum < max}
            ></NumSetter>
        </div>
        <div className="m-4"></div>
        <div className="flex text-gray-400 font-bold text-2xl items-center select-none">Made by&ensp;
            <div className="flex flex-col text-gray-500">
                <a href="https://github.com/MEtooHARD" target="_blank">MEtooHARD</a>
            </div>
        </div>
    </>
}