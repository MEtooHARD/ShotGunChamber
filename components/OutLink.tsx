import { ReactNode } from "react";


export function OutLink({ children, url, classOverr = '' }: { children: ReactNode, url: string, classOverr?: string }) {
    return <a className={"text-gray-500 dark:text-gray-400" + ` ${classOverr}`} href={url} target="_blank">{children}</a>
}

export function Title({ children }: { children: ReactNode }) {
    return <p className="text-gray-400 dark:text-gray-600 font-bold text-3xl select-none">{children}</p>
}
