import React from 'react';

import { ErrorMessage } from 'react-hook-form';

export default function ErrorMessageInput(props) {
  return (
    <ErrorMessage errors={props.errors} name={props.name}>
      {({ message }) => <p className='error'>{message}</p>}
    </ErrorMessage>
  );
}
