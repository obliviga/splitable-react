import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      item: '',
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateItem(event) {
    this.setState({
      item: event.target.value,
    });
  }

  render() {
    const {
      name,
      item,
    } = this.state;

    const due = (item);

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
            value={item}
            onChange={event => this.updateItem(event)}
          />
        </td>
      </tr>
    );
  }
}

export default Row;

Row.propTypes = {
  // index: PropTypes.number,
};

Row.defaultProps = {
  // label: null,
};
