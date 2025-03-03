const FormControl = ({ label, htmlFor, required, children }) => {
  return (
    <div className="Formcontrol">
      <label htmlFor={htmlFor}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormControl;
