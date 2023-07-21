import React from 'react';
import { CardCategory } from '../Cards';
import { getListCategories } from '@/services/api/category';

const ListCategories = async() => {

    const categories = await getListCategories();

  return (
    <div className='flex flex-wrap justify-center'>
        {categories.data.map((category) => (
            <CardCategory key={category.id} name={category.name} url={category.image}  />
        ))}
    </div>
  )
}

export default ListCategories;