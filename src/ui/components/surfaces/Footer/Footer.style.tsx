import { experimentalStyled as styled } from '@material-ui/core/styles'
import { Container, Typography, Box } from '@material-ui/core'

export const FooterStyled = styled('footer')`
	background: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => 
		theme.palette.getContrastText(theme.palette.primary.main)};
	margin-top: auto;
	padding: ${({ theme }) => theme.spacing(3)} 0;
`

export const FooterContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing(2)};
	justify-content: space-between;
`

export const FooterTitle = styled(props => (
	<Typography component="h2" variant="body1" {...props} />
))`
	font-weight: bold;
	margin-top: ${({ theme }) => theme.spacing(3)};
	padding-bottom: ${({ theme }) => theme.spacing(1)};
`

export const AppList = styled('ul')`
	display: flex;
	gap: 8px;
	list-style-type: none;
	padding: 0;
	
	img {
		width: 122px;
	}
`

export const BoxStyled = styled(Box)`
	max-width: 400px;
	margin-bottom: ${({ theme }) => theme.spacing(2)};
`