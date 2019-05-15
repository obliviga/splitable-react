import React, { Component } from 'react';

import Row from './Row';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    // Two people by default
    this.state = {
      people: {
        0: {
          name: '',
        },
        1: {
          name: '',
        },
      },
      isDisabled: true,
    };
  }

  addPerson() {
    const {
      people,
    } = this.state;

    const peopleQuantity = Object.keys(people).length;

    // Increment the length of people by 1
    people[peopleQuantity] = { name: '' };

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

    const peopleQuantity = Object.keys(people).length;

    // Decrement the length of people by 1
    delete people[peopleQuantity - 1];

    // Set the state after decrementing
    this.setState({
      people,
    });

    // If two people, disable remove button
    if (peopleQuantity === 3) {
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

    return (
      <div>
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
            {/* Create rows based on the amount of people.
            There should be two by default, based on the initial state */}
            {Object.keys(people).map(person => (
              <Row key={person} />
            ))}
          </tbody>
        </table>
        <h2>
          Itemized Total:
          &nbsp;$
        </h2>
      </div>
    );
  }
}

export default Table;
