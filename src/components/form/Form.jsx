import Input from "../input/Input";
import { useState } from "react";
import { useRef } from "react";

export default function Form({ onSubmit, children }) {
  const initialErrorState = {
    date: true,
    description: true,
    value: true,
  };
  const [errors, setErrors] = useState(initialErrorState);

  const formRef = useRef();
  const dateRef = useRef();

  const handleValidation = (event) => {
    setErrors({
      ...errors,
      [event.target.name]: !event.target.validity.valid,
    });
  };

  const handleSubmit = (event) => {
    onSubmit(event);
    formRef.current.reset();
    dateRef.current.focus();
  };

  const isFormValid = () => Object.values(errors).every((error) => !error);

  const handleReset = () => {
    setErrors(initialErrorState);
  };

  return (
    <section>
      {children}
      <form
        id="form"
        name="lancamentos"
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
        ref={formRef}
      >
        <Input
          label="Data"
          idName="date"
          type="date"
          required
          onInput={handleValidation}
          error={errors.date}
          ref={dateRef}
        />
        <Input
          label="Descrição"
          idName="description"
          required
          onInput={handleValidation}
          error={errors.description}
          minLength={2}
        />
        <Input
          label="Valor"
          idName="value"
          type="number"
          required
          step="0.01"
          onInput={handleValidation}
          error={errors.value}
        />
        <div>
          <button id="submit" type="submit" disabled={!isFormValid()}>
            Salvar
          </button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
    </section>
  );
}
