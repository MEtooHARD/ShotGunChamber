import { loop } from "../ChamberView";

type props = {
    setRound: React.Dispatch<React.SetStateAction<number>>;
    sum: number;
    darkMode: boolean;
}

export function LeftArrow({
    setRound,
    sum,
    darkMode
}: props) {
    return <svg
        className="h-14 aspect-square cursor-pointer transform duration-75 hover:scale-110 active:scale-95"
        onClick={() => { setRound(prev => loop(prev - 1, sum)) }}
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon fillRule="evenodd" fill={"#ededed"} points="9.414 12 16.707 19.293 15.293 20.707 6.586 12 15.293 3.293 16.707 4.707" />
    </svg>
}