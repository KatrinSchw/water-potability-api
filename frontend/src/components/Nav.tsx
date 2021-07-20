import React from 'react'

export function Nav() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return(
        <>
            <h1>Hello!</h1>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </>
    )
}