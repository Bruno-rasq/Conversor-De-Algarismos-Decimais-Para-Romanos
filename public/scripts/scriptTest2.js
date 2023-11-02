function getValue(){

    let strg = document.querySelector("#roman").value.toUpperCase();
    let span = document.querySelector('#Span-roman');

    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // verfica se o valor do input é válido
    if (strg == '' || typeof strg !== 'string' || strg == undefined) span.innerHTML = "ERRO: Valor inserido inválido!"
    else {

        let arabics = 0;

        for (let i = 0; i <= decimal.length; i++) {

            while (strg.indexOf(roman[i]) === 0) {

                arabics += decimal[i];
                strg = strg.replace(roman[i], '');
            }
        }

        span.innerHTML = Number(arabics);
    }
}