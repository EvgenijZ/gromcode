export default async (userName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
}