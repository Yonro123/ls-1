function Button({ value, className, Click }) {
  return (
    <button className={className} onClick={Click}>
      {value}
    </button>
  );
}

export default Button;
