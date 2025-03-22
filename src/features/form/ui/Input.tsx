import React from 'react';
import { formatPhoneNumber } from '../utils/formatPhoneNumber';
import { FormData } from '../utils/sendFormData';
import scss from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	formData: FormData;
	setFormData: (formData: FormData) => void;
}

const Input: React.FC<Props> = ({
	formData,
	setFormData,
	name,
	className,
	...props
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: name === 'phone_number' ? formatPhoneNumber(value) : value,
		});
	};

	const handleFocus = () => {
		if (name === 'phone_number' && formData.phone_number === '') {
			setFormData({ ...formData, phone_number: '+996 ' });
		}
	};

	return (
		<input
			className={`${scss.input} ${className || ''}`}
			name={name}
			value={formData[name as keyof FormData]}
			onChange={handleChange}
			onFocus={handleFocus}
			{...props}
		/>
	);
};

export default Input;
