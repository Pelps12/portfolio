export async function GET({ request, params }) {
	const url = new URL(request.url);
	console.log(url.searchParams.get('lat'), url.searchParams.get('long'));

	return new Response(
		JSON.stringify({
			name: 'HELLO'
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
