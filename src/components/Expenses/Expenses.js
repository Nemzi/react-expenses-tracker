import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import classes from "./Expenses.module.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const allExpenses = props.items;

  return (
    <Card className={classes.expenses}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart
        expenses={filteredExpenses}
        allExpenses={allExpenses}
        year={filteredYear}
      />
      <ExpensesList
        items={filteredExpenses}
        showAllExpenses={allExpenses}
        year={filteredYear}
      />
    </Card>
  );
};

export default Expenses;
