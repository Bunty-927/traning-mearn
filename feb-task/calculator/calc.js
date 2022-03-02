module.exports =
    function calc(a,b, op) {
        return eval(`${a}${op}${b}`);
    }