import React from 'react'
import ListCategories from '@/components/ListCategories'

const categories = () => {
  return (
    <div className='flex flex-col m-10'>
      <h3 className="text-center text-4xl mb-5">List all categories</h3>
      <ListCategories />
    </div>
  )
}

export default categories