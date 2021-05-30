import classes from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label className={classes["expenses-filter__label"]}>
          Filter by year
        </label>
        <select
          className={classes["expenses-filter__select"]}
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
