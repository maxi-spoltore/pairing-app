import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import WithTranslation from '../hocs/WithTranslation';

const GoBack = ({ t }) => {
  return (
    <div className='mt-32 w-full flex flex-col items-center'>
      <h3 className='mb-4 text-xl'>{t('goBack.goBackMsg')}</h3>
      <Link
        to='/'
      >
        <Button
          colorScheme="green"
          width='300px'
        >
          {t('goBack.goBackBtn')}
        </Button>
      </Link>
    </div>
  )
}

export default WithTranslation(GoBack)
