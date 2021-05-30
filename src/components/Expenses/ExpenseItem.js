import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={classes["expense-item__description"]}>
          <h2 className={classes["expense-item__h2"]}>{props.title}</h2>
          <div className={classes["expense-item__price"]}>
            {props.amount}EUR
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
