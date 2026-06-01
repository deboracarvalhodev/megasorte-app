export function validateBet(numbers) {

  if (!numbers || numbers.length === 0) {
    return {
      valid: false,
      type: 'empty',
      message: 'Você ainda não selecionou nenhum número.',
    };
  }

  if (numbers.length < 6) {
    return {
      valid: false,
      type: 'min',
      message: 'Selecione pelo menos 6 números para continuar.',
    };
  }

  if (numbers.length > 20) {
    return {
      valid: false,
      type: 'max',
      message: 'Você pode selecionar no máximo 20 números.',
    };
  }

  return {
    valid: true,
    type: 'ok',
    message: '',
  };
}