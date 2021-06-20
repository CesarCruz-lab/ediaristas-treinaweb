import React from 'react'
import { HeaderAppBar, HeaderLogo } from './Header.style'
import { Toolbar, Container } from '@material-ui/core'

const Header: React.FC = props => {
	return (
		<HeaderAppBar position="sticky">
			<Toolbar component={Container}>
				<HeaderLogo src="img/logos/logo.svg" alt="treinaweb" />
			</Toolbar>
		</HeaderAppBar>
	)
}

export default Header
