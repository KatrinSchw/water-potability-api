import * as React from 'react';
import styled from "styled-components";
import Card from "../components/Card";
import {Table} from "../components/Table";
import {useEffect, useState} from "react";
import {Alert, Button} from "react-bootstrap";
import {AnalysisData} from "./types";


const AnalysisContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default function Analysis() {
	const [analysis, setAnalysisData] = useState<AnalysisData>()
	const [message, setMessage] = useState<string>();

	useEffect(() => {
		fetch('https://water-potability-api.herokuapp.com/analysis')
			.then(response => response.json())
			.then(data => {
				setAnalysisData(data)
				console.log(data.data)
			}).catch(error => {
			setMessage('Daten konnten nicht geladen werden, überprüfen Sie bitte ihr Netzwerk!')
		});
	}, [])


	return (
		<AnalysisContent>
			{message && <Alert>{message}</Alert>}
			{
				analysis &&
                <Card
                    title={'Analysis'}
                    align={'center'}
                    justify={'center'}
                    isCol={true}
                >
                    <Table
	                    colNames={analysis.colNames}
	                    data={analysis.data}
                    />
                </Card>
			}
		</AnalysisContent>
	)
}
