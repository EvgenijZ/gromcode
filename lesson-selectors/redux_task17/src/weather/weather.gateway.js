export default async () => {
    const citiesEndpoint = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';
    try {
        const response = await fetch(citiesEndpoint);
        return response.json();
    } catch (e) {
        throw new Error(e);
    }
}