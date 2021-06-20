import { experimentalStyled as styled } from '@material-ui/core/styles'

// temas modificados em ui/themes/theme.js

export const SafeEnvironmentContainer = styled('div')`
	color: ${({theme}) => theme.palette.text.secondary};
	background: ${({theme}) => theme.palette.background.default};
	text-align: right;
	padding: ${({theme}) => theme.spacing(2)} 0;
	font-size: 14px;
`
