import axios from 'axios'

export async function GET(req, res) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log('err', error)
        return new Response(JSON.stringify({ error: 'Error fetching photos' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}