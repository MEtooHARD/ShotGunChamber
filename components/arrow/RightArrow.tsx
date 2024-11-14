import { loop } from "../ChamberView";

type props = {
    setRound: React.Dispatch<React.SetStateAction<number>>;
    sum: number;
    darkMode: boolean;
}

export function RightArrow({
    setRound,
    sum,
    darkMode
}: props) {
    return <svg
        className="h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95"
        onClick={() => { setRound(prev => loop(prev + 1, sum)) }}
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon fillRule="evenodd" fill={darkMode ? "#ededed" : "#000000"} points="14.586 12 7.293 4.707 8.707 3.293 17.414 12 8.707 20.707 7.293 19.293" />
    </svg>
}