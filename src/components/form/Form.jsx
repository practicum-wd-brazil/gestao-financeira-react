import Input from "../input/Input";
import { useState } from "react";

export default function Form({ onSubmit, children }) {
  const [error, setError] = useState(false);

  const handleValidation = (event) => {
    setError(!event.target.validity.valid);
  };

  return (
    <section>
      {children}
      <form id="form" name="lancamentos" noValidate onSubmit={onSubmit}>
        <Input
          label="Data"
          idName="date"
          type="date"
          required
          onInput={handleValidation}
          error={error}
        />
        {/* <Input label="Descrição" idName="description" required />
        <Input
          label="Valor"
          idName="value"
          type="number"
          required
          step="0.01"
        /> */}
        <div>
          <button id="submit" type="submit">
            Salvar
          </button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
    </section>
  );
}
