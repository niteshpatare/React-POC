import React from "react";
import ExpenseForm from "../components/ExpenseForm.js";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("parent:" + JSON.stringify(expenseData));
    props.onAddExpense(expenseData);
  };
  return <ExpenseForm title="Form Title" onSaveExpenseData={onSaveExpenseDataHandler} />;
};
export default NewExpense;