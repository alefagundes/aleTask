import style from './Input.module.css'

const Input = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  maxLength,
  minLength,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={handleChange}
      maxLength={maxLength}
      minLength={minLength}
    />
  )
}

export default Input
