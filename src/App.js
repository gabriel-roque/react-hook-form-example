import React, { useEffect } from 'react';

import './App.css';

import { useForm, Controller } from 'react-hook-form';
import { nomeInput, numberInput, requiredInput } from './validates';

import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

import Error from './Error';

function App() {
  const { register, handleSubmit, reset, errors, control } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className='content'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='produto'>Nome do Produto: </label>
          <input
            type='text'
            name='produto'
            id='produto'
            ref={register({ ...nomeInput })}
          />
          <Error errors={errors} name='produto' />
        </div>

        <div className='form-group'>
          <label>Quantidade: </label>
          <input
            type='number'
            name='quantidade'
            ref={register({ ...numberInput })}
          />
          <Error errors={errors} name='quantidade' />
        </div>

        <div className='form-group'>
          <label htmlFor='cpf'>CPF: </label>

          {/* Use lib 'react-input-mask' when using 'react-hook-form' 
          for STATIC MASKS */}

          <InputMask mask='999.999.999-99'>
            <input type='text' name='cpf' id='cpf' ref={register} />
          </InputMask>
          <Error errors={errors} name='cpf' />
        </div>

        <div className='form-group'>
          <label htmlFor='valor'>Valor do produto: </label>

          {/* Use lib 'react-number-format' when using 'react-hook-form' 
          for DYNAMIC INPUTS (Ex: monetary input)*/}

          <Controller
            name='valor'
            control={control}
            rules={{ ...requiredInput }}
            as={<NumberFormat thousandSeparator={true} prefix={'R$ '} />}
          />
          <Error errors={errors} name='valor' />
        </div>
        <div className='form-group'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
