import React, { Component } from 'react';
import shortid from 'shortid';

import Row from './Row';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    // Two people by default
    this.state = {
      people: [0, 1],
      isDisabled: true,
    };
  }

  addPerson() {
    const {
      people,
    } = this.state;

    // Increment the length of people by 1
    people.push(people.length);

    // Set the state after incrementing
    // Adding a person enables the remove button
    this.setState({
      people,
      isDisabled: false,
    });
  }

  removePerson() {
    const {
      people,
    } = this.state;

    // Decrement the length of people by 1
    people.pop();

    // Set the state after decrementing
    this.setState({
      people,
    });

    // If two people, disable remove button
    if (people.length === 2) {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const {
      people,
      isDisabled,
    } = this.state;

    // Create rows based on the amount of people.
    // There should be two by default, based on the initial state
    const rows = people.map(
      person => <Row key={person} />,
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
            <th>
              <button type="button" onClick={() => this.removePerson()} disabled={isDisabled}>
                Remove Person
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
