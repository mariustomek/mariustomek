import Head from 'next/head'

const cssStyle = {
    text: " text-cyan-300 max-w-screen-lg"
}

export function title(text) {
    return(
        <h1 className={"font-black text-6xl text-center" + cssStyle.text}>
            {text}
        </h1>
        )
}

export function name(text) {
    return(
        <div className="font-black text-6xl">
            <h1 className={"bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-cyan-300 to-blue-600 w-max h-18"}>
                {text}
            </h1>
        </div>
        )
}

export function subtitle(text) {
    return(
        <h2 className={"font-black text-4xl" + cssStyle.text}>
            {text}
        </h2>
    )
}

export function plaintext(color, ...rows) {
    return(
        <div className={"text-" + color}>
            {rows.map((e, i) => {
                return <p key={i.toString}>{e}</p>
            })}
        </div>
    )
}

export function listBullet(color, ...rows) {
    return(
        <ul className={"text-" + color + " list-disc list-inside"}>
            {rows.map((e, i) => {
                return <li key={i.toString}>{e}</li>
            })}
        </ul>
    )
}

export function listDecimal(color, ...rows) {
    return(
        <ol className="list-decimal list-inside">
            {rows.map((e, i) => {
                return <li className={"text-" + color} key={i.toString}>{e}</li>
            })}
        </ol>
    )
}

export function explistDecimal(...elems) {
    return(
        <ol className="list-decimal list-inside">
            {elems.map((e, i) => {
                return React.cloneElement(e, {key: i.toString()})
            })}
        </ol>
    )
}