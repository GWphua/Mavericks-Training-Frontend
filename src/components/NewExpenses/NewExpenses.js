import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const expenseDataFormSubmitHandler = (expense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...expense,
    };

    setIsEditing(false);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={expenseDataFormSubmitHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
