"use client"

import { ReactNode } from "react";
import { NameTag } from "./NameTag";
import { NumSetter } from "./NumSetter";
import { useRoundData } from "./RouletteHelper";
import { OutLink, Title } from "./OutLink";

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
        <Title>
            <OutLink url="https://github.com/MEtooHARD/ShotGunChamber">Rounds Counter</OutLink>
        </Title>
        <Title>
            For&ensp;<OutLink classOverr=""
                url="https://store.steampowered.com/app/2835570/Buckshot_Roulette/">
                Buckshot Roulette
            </OutLink>
        </Title>
        <Title>(Beta)</Title>

        <div className="m-4"></div>
        <div className="flex flex-wrap justify-center items-center
            w-full px-4">
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
        <div className="flex text-gray-400 dark:text-gray-600 text-opacity-70 font-bold text-4xl items-center select-none">
            Made by&ensp;
            <div className="flex flex-col text-gray-500 dark:text-gray-400 text-2xl">
                <NameTag name="MetooHARD" url="https://github.com/metoohard" title=""></NameTag>
                <NameTag name="ToiletKing" url="https://github.com/benjounoou" title=""></NameTag>
            </div>
        </div>
    </>
}