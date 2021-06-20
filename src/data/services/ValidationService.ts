export const ValidationService = {
  cep(cepValue=''): boolean {
    // /\D/g === procura por um valor não numérico
    // /\d/g === procura por um valor numérico
    
    return cepValue.replace(/\D/g, '').length === 8
  }
}
