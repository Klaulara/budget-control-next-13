'use client'

import React, { useState } from 'react';
import Router from 'next/router';
import { deleteBudget } from '@/services/api/budget';
import Modal from '@/components/Modal';

const ButtonDelete = ({id}) => {

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const deleteRegister = async (id) => {
    console.log(id)
    const result = await deleteBudget(id);
    setShowModal(false);
    Router.push('/budgets');
  }

  return (
    <>
    <button className='bg-sky-700 text-white' onClick={handleDelete}>
        Delete
    </button>
    {showModal ?<Modal onCancel={handleCancel} onDelete={()=>deleteRegister(id)} /> : null}
    </>
  )
}

export default ButtonDelete