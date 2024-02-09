import CheckBox from './CheckBox';

import '../../../index.scss';

export default {
	title: 'CheckBox',
	tags: ['autodocs'],
	component: CheckBox,
};

export const DefaultCheckBox = {
	args: {
		theme: 'light',
		type: 'button',
		active: false,
	},
};

export const DefaultCheckBoxActive = {
	args: {
		theme: 'light',
		type: 'button',
		active: true,
	},
};
