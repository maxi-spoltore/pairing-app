import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/button'

const GoBack = () => {
  return (
    <div className='mt-32 w-full flex flex-col items-center'>
      <h3 className='mb-4 text-xl'>Aún no hay ningún equipo añadido.</h3>
      <Link
        to='/'
      >
        <Button
          colorScheme="green"
          width='300px'
        >
          Agregar miembros
        </Button>
      </Link>
    </div>
  )
}

export default GoBack
