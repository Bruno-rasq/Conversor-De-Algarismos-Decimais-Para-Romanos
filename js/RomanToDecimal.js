let btn_roman_to_decimal = document.querySelector("#decimal-submit");
let span_decimal = document.querySelector("#decimal-Span");


btn_roman_to_decimal.addEventListener("click", function (e) {

    e.preventDefault();

    let strg = document.querySelector("#roman-input").value.toUpperCase();

    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // verfica se o valor do input é válido
    if (strg == '' || typeof strg !== 'string' || strg == undefined) {

        window.alert('erro: valor inválido');

    } else {

        let arabics = 0;

        for (let i = 0; i <= decimal.length; i++) {

            while (strg.indexOf(roman[i]) === 0) {

                arabics += decimal[i];
                strg = strg.replace(roman[i], '');
            }
        }

        document.querySelector("#decimal-submit") = '';
        span_decimal.innerHTML = arabics;
    }

});