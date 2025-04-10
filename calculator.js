function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /[,\n]/; // Default delimiters: comma and newline
    let numbersArray = numbers.split(delimiter).map(num => {
        const parsed = parseInt(num, 10);
        return isNaN(parsed) ? 0 : parsed;
    });

    return numbersArray.reduce((sum, num) => sum + num, 0);
}
