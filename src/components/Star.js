import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onSelect }) {
  return (
    <>
      <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} size={32} />
    </>
  );
}

export default Star;
