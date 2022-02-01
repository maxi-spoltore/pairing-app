import React from 'react';
import { withTranslation } from 'react-i18next';

const WithTranslation = ComponentToTranslate => {
	return withTranslation('global')(props => (
		<ComponentToTranslate {...props} />
	));
};

export default WithTranslation;
