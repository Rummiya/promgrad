export const formatPhoneNumber = (value: string) => {
	let val = value.replace(/\D/g, '').substring(0, 12);
	let formatted = '+996 ';
	if (val.length > 3) formatted += val.slice(3, 6);
	if (val.length > 6) formatted += ' ' + val.slice(6, 9);
	if (val.length > 9) formatted += ' ' + val.slice(9, 12);
	return formatted;
};
