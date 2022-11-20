import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор натуралиста" },
  ];

  const [counters, setCounter] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounter(newCounters);
  };

  const handleReset = () => {
    setCounter(initialState);
  };

  const handleIncrement = (id) => {
    setCounter((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCounter((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      )
    );
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
