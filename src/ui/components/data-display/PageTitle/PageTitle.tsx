import React from 'react'
import {
	PageTitleContainer,
	PageTitleStyled,
	PageSubtitleStyled
} from './PageTitle.style'

// Tipagem do typescript

interface PageTitleProps{
	title: string
	subTitle?: string | JSX.Element // ?: === Variável opcional
}

// Aplicando as tipagens ao props do react

const PageTitle : React.FC<PageTitleProps> = props => {
	const { title, subTitle, children } = props
	
	return (
		<PageTitleContainer>
			<PageTitleStyled>{ title }</PageTitleStyled>
			<PageSubtitleStyled>{ subTitle }</PageSubtitleStyled>
			{ children }
		</PageTitleContainer>
	)
}

export default PageTitle
