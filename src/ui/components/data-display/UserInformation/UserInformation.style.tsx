import { experimentalStyled as styled } from '@material-ui/core'
import { Avatar, Container, Rating } from '@material-ui/core'

export const UserInformationContainer = styled(Container)`
	display: grid;
	grid-template-columns: 60px 1fr;
	grid-template-rows: repeat(3, auto);
	grid-template-areas: 
		'avatar name'
		'avatar rating'
		'avatar description';
	grid-gap: ${({ theme }) => `${theme.spacing(.5)} ${theme.spacing(2)}`};
	align-items: center;
	margin: 0 auto;
	padding: ${({ theme }) => `${theme.spacing(1)}`};
	background: ${({ theme }) => theme.palette.grey[50]};
`

export const UserName = styled('span')`
	grid-area: name;
	font-weight: bolder;
	font-size: ${({ theme }) => theme.typography.body2.fontSize};
	color: ${({ theme }) => theme.palette.text.primary};
`

export const UserDescription = styled('span')`
	grid-area: description;
	font-size: ${({ theme }) => theme.typography.body2.fontSize};
	color: ${({ theme }) => theme.palette.text.secondary}
`

export const AvatarStyled = styled(Avatar)`
	grid-area: avatar;
	width: 90%;
	height: initial;
	aspect-ratio: 1;
`

export const RatingStyled = styled(Rating)`
	grid-area: rating;
	font-size: 14px;
`
