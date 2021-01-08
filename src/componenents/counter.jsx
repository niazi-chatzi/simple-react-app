import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={(event) => {
            this.props.onIncrement(event, this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={(event) => {
            this.props.onDelete(event, this.props.counter.id);
          }}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
