import { useState } from "react";

export const useForm = (inicio = {}) => {

  const [values, setValues] = useState(inicio);

  const reset = () =>{
    setValues(inicio)
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });

  };


  return [values, handleInputChange,reset];
};
