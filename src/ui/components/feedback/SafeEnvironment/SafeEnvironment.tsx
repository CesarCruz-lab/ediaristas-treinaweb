import React from 'react'
import { SafeEnvironmentContainer } from './SafeEnvironment.style'
import { Container } from '@material-ui/core'

// tag i: uma tag sem significado
// icones criados na pasta public

// Container adiciona um limite de largura

const SafeEnvironment = () => {
	return (
		<SafeEnvironmentContainer>
			<Container>
				Safe Environment <i className="twf-lock" />
			</Container>
		</SafeEnvironmentContainer>
	)
}

export default SafeEnvironment
