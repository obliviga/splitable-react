import React, { Component } from 'react';

import Row from './Row';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    // Only two people by default
    this.state = {
      people: [0, 1],
    };
  }

  addPerson() {
    const {
      people,
    } = this.state;

    // Increment the length of people by 1
    people.push(people.length);

    // Set the state after incrementing
    this.setState({
      people,
    });
  }

  render() {
    const {
      people,
    } = this.state;

    // Create rows based on the amount of people.
    // There should be two by default, based on the initial state
    const rows = people.map(
      key => <Row key={key} />,
    );

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due</th>
            <th>Item Price</th>
            <th>
              <button type="button" onClick={() => this.addPerson()}>
                Add Person
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;
