import { forwardRef } from "react";

function Input(
  { label, idName, type, error, errorMessage = "Campo Obrigatório", ...props },
  ref
) {
  return (
    <label htmlFor={idName}>
      <span>{label}</span>
      <input type={type} id={idName} name={idName} {...props} ref={ref} />
      {error && (
        <div className="form__error form__error_data">{errorMessage}</div>
      )}
    </label>
  );
}

export default forwardRef(Input);
