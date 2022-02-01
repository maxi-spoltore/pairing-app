import React from 'react';
import WithTranslation from '../hocs/WithTranslation';
import { Select } from '@chakra-ui/react';

const LanguageSelector = ({ t, i18n }) => {
	const handleChange = e => {
		i18n.changeLanguage(e.target.value);
	}

	return (
		<div className='flex items-center'>
			<span>{t('languageSelector.language')}</span>
			<div className='ml-2'>
				<Select 
					variant="flushed"
					onChange={handleChange}
				>
					<option value="es">ES</option>
					<option value="en">EN</option>
				</Select>
			</div>
		</div>
	);
};

export default WithTranslation(LanguageSelector);
