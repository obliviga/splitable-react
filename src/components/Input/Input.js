import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.state.value}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: null,
  type: 'number',
  min: null,
  max: null,
};
