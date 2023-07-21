import React from 'react';
import ListBudgets from '@/components/ListBudgets';

const budgets = () => {
  return (
    <div className='flex flex-col m-10'>
      <h3 className="text-center text-4xl mb-5">List all budgets</h3>
      <ListBudgets />
    </div>
  )
}

export default budgets