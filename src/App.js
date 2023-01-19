import Expenses from "./components/Expenses/Expenses";

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

  return <Expenses items={expenses} />;
}

export default App;
