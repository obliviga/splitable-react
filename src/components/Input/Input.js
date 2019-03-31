import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

function Input(props) {
  const {
    label,
    type,
    min,
    max,
    onChange,
  } = props;

  return (
    <label>
      {label}
      <input
        type={type}
        min={min}
        max={max}
        onChange={onChange}
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: null,
  type: 'number',
  min: null,
  max: null,
};
