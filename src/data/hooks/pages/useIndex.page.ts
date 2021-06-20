import { useState, useMemo } from 'react'
import { UserShortInterface } from 'data/@types/UserInterface'
import { ValidationService } from 'data/services/ValidationService'
import { ApiService } from 'data/services/ApiService'

export default function useIndex() {
  // cep
  const [cep, setCep] = useState('')
  
  // break de fluxo
  const breaking = useMemo(() => {
    return ValidationService.cep(cep)
  }, [cep])
  
  // dados
  const
    [erro, setErro] = useState(''),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [diarists, setDiarists] = useState([] as UserShortInterface[]),
    [moreDiarists, setMoreDiarists] = useState(0)
  
  // validacão de cep
  const cepValidation = ValidationService.cep(cep)
  
  // pesquisa na api
  async function searchProfessionals() {
    setSearchDone(false)
    setLoading(true)
    setErro('')
    
    try {
      const cepDigits = cep.replace(/\D/g, '')
      const path = `/api/diaristas-cidade?cep=${cepDigits}`
      
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[]
        quantidade_diaristas: number
      }>(path)
      
      setDiarists(data.diaristas)
      setMoreDiarists(data.quantidade_diaristas)
      setSearchDone(true)
      setLoading(false)
      
    } catch (err) {
      setErro('CEP não encontrado')
      setLoading(false)
    }
    
  }
  
  return {
    cep,
    setCep,
    cepValidation,
    searchProfessionals,
    erro,
    searchDone,
    loading,
    diarists,
    moreDiarists
  }
}
