import { useState, Fragment } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "0",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  {
    id: "1",
    title: "New TV",
    amount: 799,
    date: new Date(2021, 2, 12),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Fragment>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Fragment>
  );
};

export default App;
