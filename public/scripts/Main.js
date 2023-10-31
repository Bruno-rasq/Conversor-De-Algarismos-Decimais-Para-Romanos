import { DecimalParaRoman } from "./decimalParaRomano.js";

let BTN_decimal = document.querySelector('#btn-decimal-submit');
let SPAN_decimal = document.querySelector('#span-decimal');

BTN_decimal.addEventListener('click', function(e){

    e.preventDefault();
    let Response = DecimalParaRoman();
    SPAN_decimal.innerHTML = Response

});