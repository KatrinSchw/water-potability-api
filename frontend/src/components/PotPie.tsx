import * as React from 'react'
import {Cell, Label, Pie, PieChart} from "recharts";
import styled from "styled-components";

interface IPotPieProps {
	data: any[],
	COLORS: string[]
}

const Chart = styled.div`
	display: flex;
	justify-content: center;
  tspan {
    fill: ${props => props.theme.color}
  }
`;
export default function PotPie(props: IPotPieProps) {
	const {data, COLORS} = props

	return (
		<Chart>
			<PieChart width={300} height={300}>
				<Pie
					activeIndex={0}
					data={data}
					cx="50%"
					cy="50%"
					labelLine={false}
					innerRadius={90}
					outerRadius={120}
					fill="#8884d8"
					dataKey="value"
				>
					<Label offset={0} position="center">{`${(data[0].value * 100).toFixed(5)}%`}</Label>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
					))}
				</Pie>
			</PieChart>
		</Chart>
	);
}