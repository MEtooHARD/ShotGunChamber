type props = {
    name: string;
    url: string;
    title?: string;
}

export function NameTag({
    name,
    url,
    title = ''
}: props) {
    return <p className="flex">
        {title && <span className="mr-1 text-gray-400">{title}</span>}
        <a className="flex" href={url} target="_blank">
            {name}
        </a>
    </p>

}