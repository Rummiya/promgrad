import React from 'react';
import { formatPhoneNumber } from '../utils';
import { FormData } from '../utils/sendFormData';
import scss from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	formData: FormData;
	setFormData: (formData: FormData) => void;
	variant: 'primary' | 'secondary';
}

const Input: React.FC<Props> = ({
	formData,
	setFormData,
	variant,
	name,
	className,
	...props
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]:
				name === 'phone_number'
					? formatPhoneNumber(value)
					: value.replace(/[^A-Za-zА-Яа-яЁё\s'-]/g, ''),
		});
	};

	const handleFocus = () => {
		if (name === 'phone_number' && formData.phone_number === '') {
			setFormData({ ...formData, phone_number: '+996 ' });
		}
	};

	const colorVariant = variant === 'primary' ? scss.primary : scss.secondary;

	return (
		<input
			className={`${scss.input} ${className || ''} ${colorVariant}`}
			name={name}
			value={formData[name as keyof FormData]}
			onChange={handleChange}
			onFocus={handleFocus}
			{...props}
		/>
	);
};

export default Input;
