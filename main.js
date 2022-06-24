function fibonacci(array, number) {
    for (let i = 0; i < number; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array;
}
console.log(fibonacci([1, 1], 6))