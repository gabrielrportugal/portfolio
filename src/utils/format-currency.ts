export const formatCurrency = (n: number) => {
	return n
		.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		})
		.replace(/\s/g, ' ');
};