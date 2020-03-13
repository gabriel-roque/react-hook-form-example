export const nomeInput = {
  required: { value: true, message: 'Campo Obrigatório' }
};

export const numberInput = {
  required: { value: true, message: 'Campo Obrigatório' },
  maxLength: { value: 10, message: 'Campo max 10 digitos' },
  pattern: { value: /^[0-9]/i, message: 'Somente números' }
};

export const requiredInput = {
  required: { value: true, message: 'Campo Obrigatório' }
};
