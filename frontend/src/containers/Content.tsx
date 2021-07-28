import React from 'react'
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import generalThemes from "../themes/generalThemes";
import Overview from "./Overview";
import Analysis from './Analysis';


interface IContentProps{
	toggleDark: (active: boolean) => void,
	isDark: boolean
}

const {xs, sm, md, lg, xl, xxl} = generalThemes.breakpoints

const Div = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor} !important;
  color: ${props => props.theme.color} !important;
`

const Container = styled.div`
  min-height: 100%;
  margin: auto;
  
  @media only screen and (max-width: ${xs}) {width: 100%; margin: 0}
  @media only screen and (min-width: ${xs}) {width: 340px}
  @media only screen and (min-width: ${sm}) {width: 500px}
  @media only screen and (min-width: ${md}) {width: 700px}
  @media only screen and (min-width: ${lg}) {width: 900px}
  @media only screen and (min-width: ${xl}) {width: 1100px}
  @media only screen and (min-width: ${xxl}) {width: 90vw}
`

export default function Content(props: IContentProps) {
	const {toggleDark, isDark} = props

	return (
		<Div>
			<Router>
				<Navbar
					isDark={isDark}
					toggleDark={toggleDark}
				/>
				<Container>
					<Switch>
						<Route path="/overview">
							<Overview />
						</Route>
						<Route path="/analysis">
							<Analysis />
						</Route>
						<Route path="/" >
							<Redirect to="/overview" />
						</Route>
					</Switch>
				</Container>
			</Router>
		</Div>
	)
}