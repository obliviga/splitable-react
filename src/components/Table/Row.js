import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

// import './row.scss';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      item1: '',
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateItem1(event) {
    this.setState({
      item1: event.target.value,
    });
  }

  render() {
    const {
      name,
      item1,
    } = this.state;

    const due = (item1);

    return (
      <tr>
        <td>
          <Input
            type="text"
            value={name}
            onChange={event => this.updateName(event)}
          />
        </td>
        <td>
          $
          {due}
        </td>
        <td>
          <Input
            value={item1}
            onChange={event => this.updateItem1(event)}
          />
        </td>
      </tr>
    );
  }
}

export default Row;

Row.propTypes = {
  // label: PropTypes.string,
};

Row.defaultProps = {
  // label: null,
};
