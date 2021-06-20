import { experimentalStyled as styled } from '@material-ui/core/styles'
import { Paper, Container } from '@material-ui/core'

export const FormElementsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(5)};
`
export const ProfessionalsPaper = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(7)};
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0;
  }
`

export const ProfessionalsContainer = styled('div')`
  display: grid;
  
  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(7)};
  }
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    > :nth-of-type(odd) {
      background: ${({ theme }) => theme.palette.background.paper};
    }
  }
`
