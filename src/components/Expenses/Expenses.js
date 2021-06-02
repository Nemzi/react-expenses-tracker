import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import classes from "./Expenses.module.css";

const Expenses = (props) => {
  const [filteredValue, setFilteredValue] = useState("2021");

  const filterChangeHandler = (selectedValue) => {
    setFilteredValue(selectedValue);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredValue;
  });

  return (
    <Card className={classes.expenses}>
      <ExpenseFilter
        selected={filteredValue}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart
        expenses={filteredExpenses}
        allExpenses={props.items}
        value={filteredValue}
      />
      <ExpensesList
        items={filteredExpenses}
        showAllExpenses={props.items}
        value={filteredValue}
      />
    </Card>
  );
};

export default Expenses;
