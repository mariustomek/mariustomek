import React from 'react';

export function ProjectField(title, ...rows) {
    return (
        <div className="rounded-md p-2 hover:shadow-lg hover:shadow-gray-700 bg-gray-900">
            <h1 className="font-bold text-base text-white">{title}</h1>
            {rows.map((e, i) => {
                return <p className="text-base text-gray-500" key={i.toString}>{e}</p>
            })}
            
        </div>
    )
}
export function LinkedProjectField(title, dest, ...rows) {
    return (
        <a className="rounded-md p-2 hover:shadow-lg hover:shadow-gray-700 bg-gray-900 cursor-pointer" href={dest}>
            <h1 className="font-bold text-base text-white">{title}</h1>
            {rows.map((e, i) => {
                return <p className="text-base text-gray-500" key={i.toString}>{e}</p>
            })}   
        </a>
    )
}

export function FieldGroup(...fields) {
    return(
        <div className="grid grid-cols-3 gap-6 py-4">
            {fields.map((e, i) => {
                return React.cloneElement(e, {key: i.toString()})
            })}
        </div>
    )
}