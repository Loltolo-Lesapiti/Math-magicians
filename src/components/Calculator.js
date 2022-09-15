import React from 'react';
import calculate from '../logic/calculate';

/* eslint-disable react/destructuring-assignment */
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    return (
      <div className="cal-grid">
        <button type="button" className="workspace">
          {this.state.total}
          {this.state.operation}
          {this.state.next}
        </button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">AC</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">+/-</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">%</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn operator">÷</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">7</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">8</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">9</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn operator">×</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">4</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">5</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">6</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn operator">-</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">1</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">2</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">3</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn operator">+</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn zero">0</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn">.</button>
        <button type="button" onClick={this.handleEvent} className="cal-Btn operator">=</button>
      </div>

    );
  }
}
