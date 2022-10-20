import React from "react";

import "./InputCheckout.css";

const InputCheckout = ({
  texto,
  type,
  nome,
  id,
  size = 50,
  maxlength = 50,
  pattern,
}) => {
  return (
    <div className="input-checkout">
      <label className="label-texto" htmlFor={id}>
        {texto}
      </label>
      <input
        className="input"
        type={type}
        name={nome}
        id={id}
        size={size}
        maxLength={maxlength}
        pattern={pattern}
        required
      />
    </div>
  );
};

export default InputCheckout;
