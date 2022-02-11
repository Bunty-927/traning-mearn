function* take(n, iter) {
    let index = 0;
    for (const val of iter) {
        if (index >= n) {
            return;
        }
        index = index + 1;
        yield val;
    }

}

function* naturalNumbers() {
    let num = 1;
    while (true) {
        yield num;
        num = num + 1
    }
}

function* powerSeries(number, power) {
    let base = number;
    while (true) {
        yield Math.pow(base, power);

    }
}

let result = take(3, ['a', 'b', 'c', 'd', 'e']); //a,b,c
for (let str of result) {
    console.log(str);
}
let res = take(7, naturalNumbers()); //1 2 3 4 5 6 7
for (let value of res) {
    console.log(value);
}

let power = take(5, powerSeries(3, 2));//9
for (let series of power) {
    console.log(series);
}