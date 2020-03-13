import React, { useEffect } from 'react';

import './App.css';

import { useForm, Controller } from 'react-hook-form';
import { nomeInput, numberInput, requiredInput } from './validates';

import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

import Error from './Error';

function App() {
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('check your console');
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="product">Name of Product: </label>
          <input
            type="text"
            name="product"
            id="product"
            ref={register({ ...nomeInput })}
          />
          <Error errors={errors} name="product" />
        </div>

        <div className="form-group">
          <label>Quantility: </label>
          <input
            type="number"
            name="quantility"
            ref={register({ ...numberInput })}
          />
          <Error errors={errors} name="quantility" />
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF: </label>

          {/* Use lib 'react-input-mask' when using 'react-hook-form' 
          for STATIC MASKS */}

          <InputMask mask="999.999.999-99">
            <input type="text" name="cpf" id="cpf" ref={register} />
          </InputMask>
          <Error errors={errors} name="cpf" />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price of product: </label>

          {/* Use lib 'react-number-format' when using 'react-hook-form' 
          for DYNAMIC INPUTS (Ex: monetary input)*/}

          <Controller
            name="price"
            control={control}
            rules={{ ...requiredInput }}
            as={<NumberFormat thousandSeparator={true} prefix={'R$ '} />}
          />
          <Error errors={errors} name="price" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
