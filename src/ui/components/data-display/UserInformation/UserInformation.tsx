import React from 'react'
import {
	UserInformationContainer,
	UserName,
	UserDescription,
	AvatarStyled,
	RatingStyled
} from './UserInformation.style'

interface UserInformationProps {
	picture?: string
	name: string
	rating: number
	description?: string
}

const UserInformation: React.FC<UserInformationProps> = props => {
	const { picture, name, rating, description } = props
	
	return (
		<UserInformationContainer>
			<AvatarStyled src={ picture }>{ name[0] }</AvatarStyled>
			<UserName>{ name }</UserName>
			<RatingStyled readOnly value={ rating } />
			<UserDescription>{ description }</UserDescription>
		</UserInformationContainer>
	)
}

export default UserInformation
