'use client';

import { FC, useEffect, useState } from 'react';
import { Input, SendBtn } from './ui';

import scss from './Form.module.scss';

import { hasErrorField, sendFormData } from './utils';
import { FormData } from './utils/sendFormData';

interface FormProps {
	variant?: 'primary' | 'secondary';
}

const Form: FC<FormProps> = ({ variant = 'primary' }) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone_number: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setError(null);
	}, [formData]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsLoading(true);

		try {
			if (!formData.name || !formData.phone_number) {
				setError('Заполните все поля');
				return;
			}
			if (formData.phone_number.length < 16) {
				setError('Некорректный номер телефона');
				return;
			}

			const cleanedPhoneNumber = formData.phone_number.replace(/\s+/g, '');
			await sendFormData({ ...formData, phone_number: cleanedPhoneNumber });

			setIsSuccess(true);
			setFormData({ name: '', phone_number: '' });
			setTimeout(() => setIsSuccess(false), 1000);
		} catch (err) {
			if (hasErrorField(err)) {
				const errMessage = err.message.includes('phone number')
					? 'Некорректный номер телефона'
					: 'Ошибка при отправке формы. Попробуйте снова';
				setError(errMessage);
			} else {
				setError('Ошибка при отправке формы. Попробуйте снова');
			}
			console.log('form', err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className={scss.form} onSubmit={handleSubmit}>
			
			<Input
				name={'name'}
				type={'text'}
				placeholder={'Имя...'}
				formData={formData}
				setFormData={setFormData}
				variant={variant}
			/>
			<Input
				name={'phone_number'}
				type={'tel'}
				placeholder={'Телефон...'}
				formData={formData}
				setFormData={setFormData}
				variant={variant}
			/>

			<SendBtn
				isLoading={isLoading}
				isSuccess={isSuccess}
				className={scss.submit}
				variant={variant}
				type='submit'
			>
				Оставить заявку
			</SendBtn>

			{error && <p className={scss.error}>{error}</p>}
		</form>
	);
};

export default Form;
