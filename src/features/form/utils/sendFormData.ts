export interface FormData {
	name: string;
	phone_number: string;
}

export const sendFormData = async (data: FormData): Promise<void> => {
	try {
		const response = await fetch('http://16.171.24.1/api/contact/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			const phoneErr = errorData.phone_number?.[0];

			console.log(phoneErr);
			throw new Error(phoneErr);
		}

		console.log('Форма успешно отправлена!');
	} catch (error) {
		console.error('Ошибка:', error);
		throw error;
	}
};
