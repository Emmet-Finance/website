import { useState } from 'react';
import React from 'react';


const MaxNumberSet = () => {
  const min = 0;
  const max = 2000;

  const [value, setValue] = useState();

  const handleChange = event => {
    try {

      const value = Math.max(min, Math.min(max, Number(event.target.value)));
      setValue(value);

    } catch (error) {
      console.error("MaxNumberSet:handleChange ERROR:", error)
    }

  };

  return (
    <>
      <input
        type="number"
        placeholder="2000"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default MaxNumberSet;
