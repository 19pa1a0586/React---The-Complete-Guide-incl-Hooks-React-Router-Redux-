import ExpenseItem from "./components/ExpenseItem";
import "./Expenses.css";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Diwali Crakers",
      amount: 294.5,
      date: new Date(2022, 9, 24),
    },
    {
      id: 2,
      title: "Chocolates",
      amount: 500,
      date: new Date(),
    },
  ];
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <div className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
