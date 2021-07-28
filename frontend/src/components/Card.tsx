import React from 'react'
import styled from 'styled-components'
import {preventOverflow} from "@popperjs/core";

interface ICardProps {
	title: string,
	isCol: boolean,
	justify: string,
	align: string,
	children?: React.ReactChild
}

const CardDiv = styled.div`
  margin: 10px;
  display: flex;
  padding: 15px;
  background-color: ${props => props.theme.card.backgroundColor};
  border: 1px solid ${props => props.theme.card.borderColor};
  border-radius: 5px;
  flex-direction: ${props => props.isCol ? 'column' : 'row'};
  min-width: 18rem;
  width: min-content;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
`

const CardHead = styled.h3`
  margin: 5px;
  padding: 0;
`

const CardContent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`


export default function Card(props: ICardProps) {
	const {title, children, isCol, justify, align} = props

	return (
		<CardDiv isCol={isCol}>
			<CardHead>{title}</CardHead>
			<CardContent justify={justify} align={align}>{children}</CardContent>
		</CardDiv>
	)
}