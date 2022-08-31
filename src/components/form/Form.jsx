import Input from "../input/Input";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <section>
      <h1>Formulário</h1>
      <form id="form" name="lancamentos" noValidate onSubmit={handleSubmit}>
        <Input label="Data" idName="date" type="date" required />
        <Input label="Descrição" idName="description" required />
        <Input
          label="Valor"
          idName="value"
          type="number"
          required
          step="0.01"
        />
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
