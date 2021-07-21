module.exports = function toReadable(number) {
    const num = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const num1 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const num2 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numberStr = number.toString();
    let result = "";
    let aux = 0;
    let aux2 = 0;
    let aux3 = 0;

    if (numberStr.length === 1) {
        return (result = num[util(number)]);
    } else if (numberStr.length === 2) {
        if (parseInt(numberStr[0]) === 1) {
            aux = util(parseInt(numberStr[1]));
            return (result = num1[util(aux)]);
        } else if (parseInt(numberStr[1]) === 0) {
            aux = util(parseInt(numberStr[0]));
            return (result = num2[util(aux)]);
        } else {
            aux = util(parseInt(numberStr[0]));
            aux2 = util(parseInt(numberStr[1]));
            return (result = num2[util(aux)] + " " + num[util(aux2)]);
        }
    } else {
        if (parseInt(numberStr[1]) === 1) {
            aux = util(parseInt(numberStr[0]));
            aux2 = util(parseInt(numberStr[2]));
            return (result = num[util(aux)] + " hundred " + num1[util(aux2)]);
        } else if (
            parseInt(numberStr[1]) === 0 &&
            parseInt(numberStr[2]) === 0
        ) {
            aux = util(parseInt(numberStr[0]));
            return (result = num[util(aux)] + " hundred");
        } else if (parseInt(numberStr[2]) === 0) {
            aux = util(parseInt(numberStr[0]));
            aux2 = util(parseInt(numberStr[1]));
            return (result = num[util(aux)] + " hundred " + num2[util(aux2)]);
        } else if (parseInt(numberStr[1]) === 0) {
            aux = util(parseInt(numberStr[0]));
            aux2 = util(parseInt(numberStr[2]));
            return (result = num[util(aux)] + " hundred " + num[util(aux2)]);
        } else {
            aux = util(parseInt(numberStr[0]));
            aux2 = util(parseInt(numberStr[1]));
            aux3 = util(parseInt(numberStr[2]));
            return (result =
                num[util(aux)] +
                " hundred " +
                num2[util(aux2)] +
                " " +
                num[util(aux3)]);
        }
    }

    function util(n) {
        let aux = 0;
        while (n !== 0) {
            n--;
            aux++;
        }
        return aux;
    }
};
