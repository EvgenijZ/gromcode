export default numbers => {
    if (!Array.isArray(numbers) || !numbers.length) return null;

    let result = Infinity;

    [...numbers].forEach(number => {
        if ((Math.abs(number) ** 2) < result) result = Math.abs(number) ** 2;
    })

    return result;
}