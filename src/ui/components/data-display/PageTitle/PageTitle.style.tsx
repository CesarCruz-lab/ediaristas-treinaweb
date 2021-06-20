import { experimentalStyled as styled } from '@material-ui/core/styles'

export const PageTitleContainer = styled('section')`
	margin: ${({ theme }) => theme.spacing(2)};
	text-align: center;
`

/* font-size redimencionável */
/* tipo down md (ao diminuir a tela, menor que médio) */

export const PageTitleStyled = styled('h2')`
	margin: 0;
	color: ${({ theme }) => theme.palette.primary.main};
	font-size: ${({theme}) => theme.typography.h6.fontSize};
	font-weight: 600;
	
	${({ theme }) => theme.breakpoints.down('md')}{
		font-size: ${({ theme }) => theme.typography.body1.fontSize};
	}
`

export const PageSubtitleStyled = styled('h4')`
	margin: ${({ theme }) => theme.spacing(2)};
	color: ${({ theme }) => theme.palette.text.primary};
	font-weight: 300 !important;
	font-size: 12px;
	
	${({ theme }) => theme.breakpoints.down('md')}{
		font-size: ${({	theme }) => theme.typography.body2.fontSize};
	}
`
