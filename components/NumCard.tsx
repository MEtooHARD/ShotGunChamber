"use client"
type props = {
    title: string;
    value: number | string;
}

export function NumCard({
    title, value
}: props) {
    return <>
        <div className="flex flex-1 flex-col justify-center items-center text-center
            border-2 border-black rounded-lg
            py-1 px-3 m-1
            font-bold">
            <p className="select-none">{title}</p>
            <p className="text-2xl select-none">{value}</p>
        </div>
    </>
}