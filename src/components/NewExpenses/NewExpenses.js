import { useState } from "react";
import ExpenseAdd from "./ExpenseAdd";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const [openForm, setOpenForm] = useState(false);

  const expenseFormOpenHandler = (value) => {
    setOpenForm(value);
  }


  const expenseDataFormSubmitHandler = (expense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...expense,
    };
    
    props.onAddExpense(expenseData);
  };

  
  return openForm ? (
    <div className="new-expense">
      <ExpenseForm onToggle={expenseFormOpenHandler} />
    </div>
  ) : <div className="new-expense">
  <ExpenseAdd onToggle={expenseFormOpenHandler} onSaveExpenseData={expenseDataFormSubmitHandler} />
</div>;
}

export default NewExpenses;
