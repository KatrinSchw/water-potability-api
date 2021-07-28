import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import config from '../themes/generalThemes'

import Content from "../containers/Content";

export function App() {
	const [isThemeDark, setIsThemeDark] = useState(false)
	let theme = (isThemeDark ? config.dark : config.light)

	return (
		<ThemeProvider theme={theme}>
			<Content toggleDark={setIsThemeDark} isDark={isThemeDark}/>
		</ThemeProvider>
	)
}