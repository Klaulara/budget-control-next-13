import React from 'react';
import NewBudget from '@/components/NewBudget';

const newbudgets = () => {
  return (
    <div className='flex flex-col m-10'>
      <h3 className="text-center text-4xl">Create a new Budget</h3>
      <NewBudget />
    </div>
  )
}

export default newbudgets