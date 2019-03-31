import React, { Component } from 'react';

import Input from '../Input/Input';

class Main extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      subtotal: '',
    };
  }

  updatesubtotal(evt) {
    this.setState({
      subtotal: evt.target.value
    });
  }

  render() {
    const { subtotal } = this.state;

    let total = subtotal;

    if (subtotal === '') {
      total = '_______';
    }

    return (
      <main>
        <Input
          label="Subtotal"
          min="0"
          value={subtotal}
          onChange={evt => this.updatesubtotal(evt)}
        />
        {/* <Input
          label="Tax"
          min="0"
        />
        <Input
          label="Tip"
          min="0"
        /> */}
        <h2>
          Grand Total:
          &nbsp;
          {total}
        </h2>
        {/* <ul>
          <li>
            
          </li>
        </ul> */}
      </main>
    );
  }
}

export default Main;
