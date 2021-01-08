import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  return (
    <div>
      {renderResetButton(counters.length, onReset)}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </div>
  );
};

const renderResetButton = (count, onReset) => {
  if (count > 0)
    return (
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
    );
  return null;
};

export default Counters;
