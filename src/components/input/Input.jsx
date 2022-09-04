export default function Input({ label, idName, type, error, ...props }) {
  return (
    <label htmlFor={idName}>
      <span>{label}</span>
      <input type={type} id={idName} name={idName} {...props} />
      {error && (
        <div className="form__error form__error_data">Campo obrigatório</div>
      )}
    </label>
  );
}
