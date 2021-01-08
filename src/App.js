import React, { Component } from 'react';
import './App.css';
import NavBar from './componenents/navbar';
import Counters from './componenents/counters';

class App extends Component {

  // Best Places to do ajax calls
  // componentDidMount() {}
  // componentDidUpdate() {}
  // componentWillUnmount() {}

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters} />
        </main>
      </React.Fragment>
    );
  } 

  handleDelete = (event, counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = (event) => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (event, counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    ++counters[index].value;

    this.setState({ counters });
  };
}

export default App;
