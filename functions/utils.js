
export const response = (data, rcode, header, cors = false) {
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	};
}