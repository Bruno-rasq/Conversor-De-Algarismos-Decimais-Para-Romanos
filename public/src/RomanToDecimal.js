function RomanToDecimal(strg){
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let arabics = 0;

    if (strg == '' || typeof strg !== 'string' || strg == undefined) return "ERRO: Valor inserido inválido!"
    else {

        for (let i = 0; i <= decimal.length; i++) {

            while (strg.indexOf(roman[i]) === 0) {

                arabics += decimal[i];
                strg = strg.replace(roman[i], '');
            }
        }

    }

    return Number(arabics)
};

function getValueRoman(){

    let strg = document.querySelector("#roman").value.toUpperCase();
    let span = document.querySelector('#Span-roman');

    let DecimalResponse = RomanToDecimal(strg)
    span.innerHTML = DecimalResponse

};