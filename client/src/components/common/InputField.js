import React from "react";
import classname from "classname";
import PropTypes from "prop-types";

function InputField({
  name,
  value,
  type,
  onChange,
  placeholder,
  error,
  info,
  disabled
}) {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classname("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  info: PropTypes.string,
  error: PropTypes.string
};

InputField.defautProps = {
  type: "text"
};

export default InputField;
