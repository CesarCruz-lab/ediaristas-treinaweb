import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, CircularProgress, Container } from '@material-ui/core'
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from 'ui/styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'

export default function Home() {
  const {
    cep,
    setCep,
    cepValidation,
    searchProfessionals,
    erro,
    searchDone,
    loading,
    diarists,
    moreDiarists
  } = useIndex()
  
  return (
    <section>
      <SafeEnvironment />
      <PageTitle
    		title='Conheça nossos profissionais'
    		subTitle={<h3>Preecha seu endereço e veja todos os profissonais da sua localidade</h3>}
      ></PageTitle>
      
      <FormElementsContainer>
        <TextFieldMask
      		label="Digite seu CEP"
      		mask="99.999-999"
      		variant="outlined"
      		value={cep}
      		onChange={ev => setCep(ev.target.value)}
      		fullWidth
        />
        
        {erro && <Typography color="error">{ erro }</Typography>}
        
        <Button
      		variant="contained"
      		color="secondary"
      		sx={{ width: '220px' }}
      		disabled={!cepValidation || loading}
      		onClick={() => searchProfessionals(cep)}
      	>
      	  {loading ? <CircularProgress size={20} /> : 'Buscar'}
      	</Button>
      </FormElementsContainer>
      
      {searchDone && (!!diarists.length ? (
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            {diarists.map((item, index) => {
              return (
              	<UserInformation
              	  key={index}
              		name={item.nome_completo}
              		picture={item.foto_usuario}
              		rating={item.reputacao}
              		description={item.cidade}
              	/>
              )
            })}
          </ProfessionalsContainer>
          <Container sx={{ textAlign: 'center', padding: '32px' }}>
            {moreDiarists > 0 && (
              <Typography padding="32px">
                mais {moreDiarists}
                {moreDiarists > 1 
                  ? ' profissionais atendem'
                  : ' profissional atende'
                } ao seu endereço
              </Typography>
            )}
            
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: '220px' }}
            >
              Contratar um profissional
            </Button>
          </Container>
        </ProfessionalsPaper>
      ) : (
        <Typography align="center" color="textPrimary" padding="32px">
          Ainda não temos nenhum diarista em sua área
        </Typography>
      )) }
    </section>
  )
}
