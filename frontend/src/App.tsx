import React from 'react'
import {Tablee} from "./components/Table";
import {Nav} from "./components/Nav";
import {Card} from "./components/Card";
import BarChart from "./components/BarChart";
import {Grid} from "./components/Grid";
import {Input} from "./components/Input";

export function App() {
    return(
        <>
            <div className="mittig"><h1>WATER POTABILITY</h1></div>
            <Nav></Nav>
            <br />
            <Card />
            <Card></Card>
            <Card></Card>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="Diagramm"><h3>Average</h3><BarChart></BarChart></div>
            <br /><br />
                <Tablee></Tablee>
            <br />
            <Grid></Grid>
            <br />
            <Input></Input>
        </>
    )
}