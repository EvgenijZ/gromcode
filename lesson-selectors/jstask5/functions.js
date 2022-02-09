export const reverseArray = numbers => !Array.isArray(numbers) ? null : [...numbers].reverse();

export const withdraw = (clients, balances, client, amount) => {
    if (!clients) return null;

    const currentClient = clients.indexOf(client);
    return balances[currentClient] < amount ? -1 : balances[currentClient] - amount;
}

export const getAdults = obj => {
    if (!obj) return null;

    let newObj = {};

    for (let prop in obj) {
        if (obj[prop] >= 18) {
            newObj[prop] = obj[prop];
        }
    }

    return newObj;
};