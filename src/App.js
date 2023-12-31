import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
  title: 'New TV', 
  amount: 799.49, 
  date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e5',
    title: 'Mobile',
    amount: 500,
    date: new Date(2019, 5, 11),
  },
  {
    id: 'e6',
    title: 'PS5',
    amount: 800,
    date: new Date(2019, 8, 2),
  },
];


function App() {

  

 
    const [expenses, setExpenses] = useState(dummy_expenses);
  

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
    
  
}
export default App;
 