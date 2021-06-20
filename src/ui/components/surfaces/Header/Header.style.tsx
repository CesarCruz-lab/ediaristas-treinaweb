import { experimentalStyled as styled } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'

// .MuiToolbar-root: 
// Mui (padrão do material) - Toolbar (elemento) - root (elememto pai | raiz)

export const HeaderAppBar = styled(AppBar)`
	background: ${({theme}) => theme.palette.background.paper};
	
	${({theme}) => theme.breakpoints.up('md')} {
		.MuiToolbar-root {
			height: 100px;
		}
	}
	
	${({theme}) => theme.breakpoints.down('md')} {
		.MuiToolbar-root {
			display: flex;
			justify-content: center;
		}
	}
`

export const HeaderLogo = styled('img')`
	height: 27px:0;
	
	${({theme}) => theme.breakpoints.up('md')} {
		height: 48px;
	}
`
