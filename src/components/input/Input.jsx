export default function Input({ label, idName, type, ...props }) {
  return (
    <label htmlFor={idName}>
      <span>{label}</span>
      <input type={type} id={idName} name={idName} {...props} />
      <div className="form__error form__error_data"></div>
    </label>
  );
}
