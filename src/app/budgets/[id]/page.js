import React from 'react';
import { ViewBudget, ViewExpense } from '@/components/Cards';
import Modal from '@/components/Modal';

import { getBudget } from '@/services/api/budget';
import { getExpensesbyBudget } from '@/services/api/expenses';
import { ButtonPage, ButtonTittle } from '@/components/Button';

import ButtonDelete from './ButtonDelete';

const BudgetId = async({params}) => {

    const budget = await getBudget(params.id);
    const expenses = await getExpensesbyBudget(params.id);

    const expensesValue = expenses.data.reduce((acc, expense) => {
        return acc + expense.value
    }, 0);

    const difference = budget.data[0].value - expensesValue;

  return (
    <div>
      <ViewBudget name={budget.data[0].name} initialValue={budget.data[0].value} difference={difference} />
      {expenses.data.map((expense) => (
          <ViewExpense key={expense.id} name={expense.name} value={expense.value} date={expense.updated_at}/>  
        ))
      }
      <ButtonPage href={`/budgets/${params.id}/edit`}>Edit Budget</ButtonPage>
      <ButtonDelete id={budget.data[0].id}/>
    </div>
  )
}

export default BudgetId