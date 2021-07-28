import * as React from 'react'
import styled from "styled-components"
import Card from "../components/Card";
import {useEffect, useState} from "react";
import MyBarChart from "../components/BarChart";
import {Alert} from "react-bootstrap";
import {AverageData} from "./types";


export default function Average() {
	const [averageData, setAverageData] = useState<AverageData[]>()
	const [message, setMessage] = useState<string>();

	useEffect(() => {
		fetch('https://water-potability-api.herokuapp.com/avg-array')
			.then(response => response.json())
			.then(data => setAverageData(data))
	})

	return (
		<>
			{message && <Alert>{message}</Alert>}
			{
				averageData &&
	                <Card
	                    title={'Average'}
	                    align={'center'}
	                    justify={'center'}
	                    isCol={true}
	                >
		                <MyBarChart data={averageData}>
	                    </MyBarChart>
	                </Card>
			}
		</>
	)
}