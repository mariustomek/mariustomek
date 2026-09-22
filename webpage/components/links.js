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

export function multipagetext(...objects) {
    return(
        <div className="inline">
            {objects.map((e, i) => {
                if (e.type === "page") {
                    return <a key={i.toString()} className={"text-" + e.color + " hover:underline inline"} href={e.url} target="_blank">{e.name}</a>
                } else if (e.type === "text") {
                    return <p key={i.toString()} className={"text-" + e.color + " inline"}>{e.text}</p>
                }
            })}
        </div>
    )
}