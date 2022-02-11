const input = [{
        name: 'John',
        yearOfBirth: 1988,
        placeOfBirth: 'New York',
    },
    {
        name: 'Nancy',
        yearOfBirth: 1963,
        placeOfBirth: 'New York',
    },
    {
        name: 'John',
        yearOfBirth: 1980,
        placeOfBirth: 'Toronto',
    },
];

const isOdd = (num) => {
    return num % 2 === 1;
};

const groupBy = (array, callback) => array.reduce(
    (accumulator, currentValue) => {
        const key = callback(currentValue);

        if (accumulator[key]) {
            accumulator[key].push(currentValue);
        } else {
            accumulator[key] = [currentValue];
        }

        return accumulator;
    }, {},
);

let str1 = groupBy(input, t => t.name);

let str2 = groupBy(input, t => isOdd(t.yearOfBirth));

console.log(str1);
console.log(str2);