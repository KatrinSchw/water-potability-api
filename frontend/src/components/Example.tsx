import React, { PureComponent } from 'react';
import {PieChart, Pie, Cell, Label} from 'recharts';

const data = [
	{ name: 'Potable', value: 40 },
	{ name: 'Impotable', value: 60 }
];

const COLORS = ['#F06292', '#AAA']

export default class Example extends PureComponent {
	static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

	render() {
		return (
			<PieChart width={400} height={400}>
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
				<Label offset={0} position="center">{`${data[0].value}%`}</Label>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
				</Pie>
			</PieChart>
		);
	}
}