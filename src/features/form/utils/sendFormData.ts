export interface FormData {
	name: string;
	phone_number: string;
}

export const sendFormData = async (data: FormData): Promise<void> => {
	try {
		const response = await fetch('http://51.21.192.132/api/contact/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Ошибка при отправке формы');
		}

		console.log('Форма успешно отправлена!');
	} catch (error) {
		console.error('Ошибка:', error);
		throw error;
	}
};
