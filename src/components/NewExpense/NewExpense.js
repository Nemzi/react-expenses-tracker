import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  let [currentId, setNewId] = useState(4);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: currentId,
    };

    props.onAddExpense(expenseData);
    setNewId((prevId) => {
      return currentId + 1;
    });
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Card
      className={`${classes["new-expense"]} ${
        isEditing ? classes["card-appears"] : ""
      }`}
    >
      {!isEditing && (
        <Button onClick={startEditingHandler}>Add new expense</Button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
