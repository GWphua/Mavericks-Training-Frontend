import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "500",
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: "5",
      date: new Date(2021, 5, 12),
    },
    {
      id: "e3",
      title: "Bowel Insurance",
      amount: "5000",
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
