import React from 'react'

export function Nav() {
    fetch('http://water-potability.herokuapp.com')
        .then(response => response.json())
        .then(data => console.log(data));


    return(
        <>
            <p className="overview">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Company</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Overview</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Analysis</a>
                </li>
            </ul>
            </p>
        </>
    )
}