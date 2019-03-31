import React, { Component } from 'react';

import Input from '../Input/Input';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: '',
      tax: '',
      tip: '',
    };
  }

  updateSubtotal(event) {
    this.setState({
      subtotal: event.target.value,
    });
  }

  updateTax(event) {
    this.setState({
      tax: event.target.value,
    });
  }

  updateTip(event) {
    this.setState({
      tip: event.target.value,
    });
  }

  render() {
    const {
      subtotal,
      tax,
      tip,
    } = this.state;

    const total = +subtotal + +tax + +tip;

    // if (subtotal === '') {
    //   total = '0';
    // }

    return (
      <main>
        <Input
          label="Subtotal"
          value={subtotal}
          onChange={event => this.updateSubtotal(event)}
        />
        <Input
          label="Tax"
          value={tax}
          onChange={event => this.updateTax(event)}
        />
        <Input
          label="Tip"
          value={tip}
          onChange={event => this.updateTip(event)}
        />
        <h2>
          Grand Total:
          &nbsp;$
          {total}
        </h2>
        {/* <ul>
          <li>
            You tipped %{percentage}
          </li>
        </ul> */}
      </main>
    );
  }
}

export default Main;
