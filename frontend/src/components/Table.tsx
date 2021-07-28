import React from 'react'
import styled from 'styled-components'


interface ITableProps {
	colNames: string[],
	data: any
}

const StyledTable = styled.table`
	color: ${props => props.theme.color};
`

export function Table(props: ITableProps) {
	const {colNames, data} = props

	const formatValue = value => isNaN(value) ? value : value.toFixed(3);

	const createTableContent = () => {
		return data.map((row, i) => <tr key={i}>
			{row.map((col, i) => <td key={i}>{(col == null) ? '-' : formatValue(col)}</td>)}
		</tr>)
	}


	return (
		<StyledTable className="table table-hover">
			<thead>
				<tr>
					{colNames.map((name, i) => <th key={i}>{name}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					createTableContent()
				}
			</tbody>
		</StyledTable>
	)
}