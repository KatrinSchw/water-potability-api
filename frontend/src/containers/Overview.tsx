import * as React from 'react'
import styled from "styled-components"
import Card from "../components/Card";
import {Table} from "../components/Table";
import {useEffect, useState} from "react";
import PotPie from "../components/PotPie";
import {Alert, Button} from "react-bootstrap";
import {DataItem, PotabilityData} from "./types";

const OverviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const CardGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  color: ${props => props.theme.color} !important;
  
  @media only screen and (max-width: 1220px) {
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
  }
  
  div {
    @media only screen and (max-width: 1220px){
      width:100%;
      div * {
        justify-content: center;
      }
    }
  }
`

const StyledButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  justify-content: stretch;
  width: 100%;
  height: 100%;
  
  button {
    margin-top: 10px;
  }
`

export default function Overview() {
	const [minmax, setMinmax] = useState<DataItem[]>();
	const [potabilityData, setPotabilityData] = useState<PotabilityData[]>()
	const [countOfSamples, setCountOfSamples] = useState<number>()
	const [message, setMessage] = useState<string>();

	useEffect(() => {
		fetch('https://water-potability-api.herokuapp.com/overview')
			.then(response => response.json())
			.then(data => {
				setMinmax(data.minmax)
				setPotabilityData([
					{name: "Potable", value: data.avg},
					{name: "Impotable", value: (1 - data.avg)}
				])
				setCountOfSamples(data.count)
			}).catch(error => {
			setMessage('Daten konnte nicht geladen werden, überprüfen sie bitte ihrem Netzwerk!')
		});
	}, [])


	return (
		<OverviewContent>
			{message && <Alert>{message}</Alert>}
			<CardGroup>
				{
					potabilityData &&
                    <Card
                        title={'Potability'}
                        align={'center'}
                        justify={'center'}
                        isCol={true}
                    >
                        <PotPie data={potabilityData} COLORS={['#6292F0', '#AAA']}/>
                    </Card>
				}
				{
					minmax &&
                    <Card
                        title={'Min / Max'}
                        align={'center'}
                        justify={'center'}
                        isCol={true}
                    >
                        <Table colNames={['Categories', 'min', 'max']} data={minmax}/>
                    </Card>
				}
				{
					countOfSamples &&
                    <Card
                        title={`Total: ${countOfSamples}`}
                        align={'space-around'}
                        justify={'center'}
                        isCol={true}
                    >
                        <StyledButtonDiv>
                            <Button variant="success">+ Add New</Button>
                            <Button variant="primary">View Results</Button>
                        </StyledButtonDiv>
                    </Card>
				}
			</CardGroup>
		</OverviewContent>
	)
}