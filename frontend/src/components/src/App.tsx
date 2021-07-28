import React from 'react'
import {HelloWorld} from "./components/HelloWorld";
import {Tabelle} from "./components/Tabelle";
import {Nav} from "./components/Nav";
import {MyNavbar} from "./components/Navbar"

export function App() {
    return(
        <>
            <Tabelle></Tabelle>
            <Nav></Nav>
            <HelloWorld></HelloWorld>
            <MyNavbar></MyNavbar>
        </>
    )
}