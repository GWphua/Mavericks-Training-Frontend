import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  const expenseDataFormSubmitHandler = (expense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...expense,
    };
    
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataFormSubmitHandler} />
    </div>
  );
}

export default NewExpenses;
