import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Icon from "./Icon"

interface INavbarProps {
	isDark: boolean,
	toggleDark: (active: boolean) => void,
}

const Nav = styled.nav`
  z-index: 100;
  position: sticky;
  margin: 0 0 20px 0 !important;
  width: 100%;
  box-shadow: 0 3px 10px ${props => props.theme.nav.shadow};
  top: 0;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.nav.border} !important;
  background-color: ${props => props.theme.nav.backgroundColor} !important;
  color: ${props => props.theme.color}; !important;
`

const NavContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Ul = styled.ul`
  display: flex;
  margin: 0;
  height: 100%;
  padding: 0;
  list-style-type: none;
  font-size: 1.4rem;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    justify-content: center;
    flex-direction: column !important;
    width: 100%;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    justify-content: flex-start;
    flex-direction: row;
  }
`

const NavLi = styled.li`
  display: flex;
  height: 80%;
  border-left: 1px solid #95A5A6;
  align-items: center;
  margin: 7px 0 7px 0;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    border-top: 1px solid #95A5A6;
    border-left: none;
    justify-content: center;
    width: 75%;
    margin: 0;
  }
  
  a {
    padding: 3px 10px 3px 10px;
    margin: 0 10px 0 10px;
    border-radius: 10px;
    height: 80%;
    box-sizing: border-box;
    color: inherit;
    text-decoration: none;
    text-decoration-color: ${props => props.theme.nav.backgroundColor};

    &:hover {
      transition: 0.75s;
      background-color: ${props => props.theme.hover};
      text-decoration-color: ${props => props.theme.color};
      color: inherit !important;
      text-decoration: underline;

      span {
        font-style: italic;
      }

    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      margin: 5px 0 5px 0;
    }
  }
`

const BrandLi = styled(NavLi)`
  border: none;
  
  a {
    font-size: 1.85rem;
    padding: 3px 10px 3px 10px;
    margin: 0 10px 0 10px;
    border-radius: 10px;
    height: 80%;
    box-sizing: border-box;
    border: none;
    color: inherit;
    text-decoration: none;
    text-decoration-color: ${props => props.theme.nav.backgroundColor};

    &:hover {
      transition: 0.75s;
      background-color: ${props => props.theme.hover};
      text-decoration-color: ${props => props.theme.color};
      color: inherit !important;
      text-decoration: none;
      font-style: italic;

      span {
        font-style: italic;
      }

    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      margin: 5px 0 5px 0;
    }
  }
`

const ThemeDiv = styled.div`
  height: 64px;
  width: 64px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ThemeToggler = styled.a`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover {
    transition: 0.5s;
    background-color: ${props => props.theme.backgroundColor};
  }
  svg {
    &:hover {
      transform: scale(1.2);
    }
  }
`


export default function Navbar(props: INavbarProps) {
	const {isDark, toggleDark} = props

	return (
		<Nav>
			<NavContent>
				<Ul>
					<BrandLi>
						<Link to="/">WaterPotability</Link>
					</BrandLi>
					<NavLi>
						<Link to="/overview">Overview</Link>
					</NavLi>
					<NavLi>
						<Link to="/analysis">Analysis</Link>
					</NavLi>
				</Ul>
				<ThemeDiv>
					<ThemeToggler onClick={() => {
						toggleDark(!isDark)
						console.log(isDark)
					}}>
						<Icon isDark={isDark}/>
					</ThemeToggler>
				</ThemeDiv>
			</NavContent>
		</Nav>
	)
}