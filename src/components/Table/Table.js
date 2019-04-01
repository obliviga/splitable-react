import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: 2,
    };
  }

  addPerson() {
    const { people } = this.state;

    this.setState({
      people: people + 1,
    });
  }

  render() {
    const {
      people,
    } = this.state;

    const rowsArray = [];

    // For every person, create a row
    for (let i = 0; i < people; i += 1) {
      rowsArray.push(
        <Row
          key={i}
          rowsArray={rowsArray}
          index={i}
        />,
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due</th>
            <th>Item Price</th>
            <th>
              <button type="button" onClick={() => this.addPerson(rowsArray)}>
                Add Person
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsArray}
        </tbody>
      </table>
    );
  }
}

export default Table;

Table.propTypes = {
  // people: PropTypes.number,
};

Table.defaultProps = {
  people: 2,
};
