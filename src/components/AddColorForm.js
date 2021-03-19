import React, { useState } from 'react';
import { useInput } from '../customHooks/useInput';

function AddColorForm({ onNewColor = (f) => f }) {
  const [titleProps, resetTitle] = useInput(' ');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="Nazwa koloru..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>Dodaj</button>
    </form>
  );
}

export default AddColorForm;