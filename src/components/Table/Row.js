import React, { Component } from 'react';

import Input from '../Input/Input';

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      itemInput: '',
      items: [0],
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  updateItem(event) {
    this.setState({
      itemInput: event.target.value,
    });
  }

  addItem() {
    const {
      items,
    } = this.state;

    // Increment the length of items by 1
    items.push(items.length);

    // Set the state after incrementing
    this.setState({
      items,
    });
  }

  render() {
    const {
      name,
      itemInput,
      items,
    } = this.state;

    // Create item inputs based on the amount of items.
    // There should be 1 by default per row, based on the initial state
    const itemInputs = items.map(
      item => <Input key={item} value={itemInput} onChange={event => this.updateItem(event)} />,
    );

    let due = itemInput;

    if (itemInput === '') {
      due = 0;
    }

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
          {itemInputs}
        </td>
        <td>
          <button type="button" onClick={() => this.addItem()}>Add item</button>
        </td>
      </tr>
    );
  }
}

export default Row;
