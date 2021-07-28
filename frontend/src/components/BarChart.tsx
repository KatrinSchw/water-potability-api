import * as React from 'react'
import {CartesianGrid, Bar, BarChart, XAxis, Tooltip, Legend} from "recharts";
import styled from "styled-components";
import { AverageData } from '../containers/types';

const Chart = styled.div`
	display: flex;
	justify-content: center;
  tspan {
    fill: ${props => props.theme.color}
  }
`;

interface IBarChartProps {
	data: AverageData[]
}

export default function MyBarChart(props: IBarChartProps) {
	const { data } = props

	return (
		<Chart>
			<BarChart width={730} height={250} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="category" />
				<Tooltip />
				<Legend />
				<Bar dataKey="avg" fill="#8884d8" />
			</BarChart>
		</Chart>
	)
}