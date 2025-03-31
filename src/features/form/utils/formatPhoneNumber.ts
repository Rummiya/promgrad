export const formatPhoneNumber = (value: string) => {
	const replaced = value.replace(/\D/g, '').substring(0, 12);
	let formatted = '+996 ';
	if (replaced.length > 3) formatted += replaced.slice(3, 6);
	if (replaced.length > 6) formatted += ' ' + replaced.slice(6, 9);
	if (replaced.length > 9) formatted += ' ' + replaced.slice(9, 12);
	return formatted;
};
