import React, { useEffect } from 'react';
import './App.css';

import { useForm, ErrorMessage } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const nomeInput = {
    required: { value: true, message: 'Campo Obrigatório' }
  };

  const numberInput = {
    required: { value: true, message: 'Campo Obrigatório' },
    maxLength: { value: 2, message: 'Campo max 2 digitos' },
    pattern: { value: /^[0-9]/i, message: 'Somente números' }
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="produto">Nome do Produto: </label>
          <input
            type="text"
            name="produto"
            id="produto"
            ref={register({ ...nomeInput })}
          />
          <ErrorMessage errors={errors} name="produto">
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>

        <div className="form-group">
          <label>Quantidade: </label>
          <input
            type="number"
            name="quantidade"
            ref={register({ ...numberInput })}
          />
          {/* {errors.quantidade && <span> Campo obrigatório</span>} */}
          <ErrorMessage errors={errors} name="quantidade">
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>

        <div className="form-group">
          <label htmlFor="valor">Valor do produto: </label>
          <input type="number" name="valor" id="valor" ref={register} />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
