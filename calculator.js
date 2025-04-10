function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /[,\n]/; // Default delimiters: comma and newline
    let numbersString = numbers;

    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        delimiter = new RegExp(`[${customDelimiter},\n]`);
        numbersString = numbers.substring(delimiterEndIndex + 1);
    }

    const numbersArray = numbersString.split(delimiter).map(num => {
        const parsed = parseInt(num, 10);
        return isNaN(parsed) ? 0 : parsed;
    });

    return numbersArray.reduce((sum, num) => sum + num, 0);
}
