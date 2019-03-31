import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import Input from '../Input/Input';

import './table.scss';

class Table extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: '',
    //   item1: '',
    // };
  }

  // updateName(event) {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // }

  // updateItem1(event) {
  //   this.setState({
  //     item1: event.target.value,
  //   });
  // }

  render() {
    // const {
    //   name,
    //   item1,
    // } = this.state;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Due</th>
            <th>Item1</th>
          </tr>
        </thead>
        <tbody>
          <Row />
          <Row />
        </tbody>
      </table>
    );
  }
}

export default Table;

Table.propTypes = {
  // label: PropTypes.string,
};

Table.defaultProps = {
  // label: null,
};
