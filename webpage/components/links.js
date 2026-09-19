export function file(url, name, color) {
    return(
        <a className={"text-" + color + " hover:underline"} href={url} target="_blank" download>{name}</a>
    )
}

export function page(url, name, color) {
    return(
        <a className={"text-" + color + " hover:underline"} href={url} target="_blank">{name}</a>
    )
}

export function pagetext(url, name, color, text, colorT) {
    return(
        <div className="inline">
            <a className={"text-" + color + " hover:underline inline"} href={url} target="_blank">{name}</a><p className={"text-" + colorT + " inline"}> {text}</p>
        </div>
    )
}