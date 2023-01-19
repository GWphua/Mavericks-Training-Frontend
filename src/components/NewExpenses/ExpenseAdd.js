function ExpenseAdd(props) {
  const toggleHandler = () => props.onToggle(true);

  return (
    <div className="new-expense__actions">
      <button type="submit" onClick={toggleHandler}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseAdd;
