function Input({ placeholder, setInpValue, value }) {
  const onChange = (e) => {
    setInpValue(e.currentTarget.value);
  };

  return (
    <label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;
