import React from 'react'
import { Typography } from '@material-ui/core'
import { 
	FooterStyled,
	FooterContainer,
	FooterTitle,
	AppList,
	BoxStyled
} from './Footer.style'

const Footer: React.FC = props => {
	const { children } = props
	
	return (
		<FooterStyled>
			<FooterContainer>
				<BoxStyled>
					<FooterTitle>Quem somos</FooterTitle>
					<Typography variant="body2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
						amet suscipit lacus, nec consequat turpis. Aliquam lacinia finibus
						sapien quis rutrum. Nam vel nisl lobortis, malesuada ex ac, laoreet
						urna. Praesent at cursus neque, a gravida eros. Aliquam ac auctor
						diam. Duis accumsan scelerisque erat, at dignissim quam rutrum id.
						Nulla sed turpis id metus sodales accumsan.
					</Typography>
				</BoxStyled>
				
				<BoxStyled>
					<FooterTitle>Baixe nossos Aplicativos</FooterTitle>
					<AppList>
						<li>
							<a 
								href="/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="img/logos/app-store.png" alt="App Store" />
							</a>
						</li>
						<li>
							<a 
								href="/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="img/logos/google-play.png" alt="App Store" />
							</a>
						</li>
					</AppList>
				</BoxStyled>
				
			</FooterContainer>
		</FooterStyled>
	)
}

export default Footer
