import React from 'react';
import { CardBudget } from '../Cards';
import { getListBudgets } from '@/services/api/budget';

const ListBudgets = async() => {

    const budgets = await getListBudgets();

  return (
    <div className='flex flex-wrap justify-center'>
        {budgets.data.map((budget) => (
            <CardBudget key={budget.id} name={budget.name} value={budget.value} id={budget.id} />
        ))}
    </div>
  )
}

export default ListBudgets