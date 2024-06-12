// Sum Numbers
function sum (numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, curr) => acc + curr);
}