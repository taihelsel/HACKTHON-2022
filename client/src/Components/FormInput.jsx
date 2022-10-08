/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

export default function FormInput({
  type,
  value,
  updateState,
  id,
  labelText,
  required = false,
}) {
  return (
    <label htmlFor={id}>
      {labelText}
      <input id={id} type={type} required={required} onChange={updateState} value={value} />
      {required ? <h3>This input is required</h3> : null}
    </label>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
};
FormInput.defaultProps = {
  required: false,
};
