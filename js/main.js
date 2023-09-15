import { DecimalParaRoman } from "./DecToRoman.js";
import { RomanoParaDecimal } from "./RomanToDecimal.js";


// evento de conversão de decimal para algarismo romana
let btn = document.querySelector("#btn-submit");
let span = document.querySelector("#roman");

btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    let Response = DecimalParaRoman();
    span.innerHTML = Response

});


// evento de conversão de algarismo romano para decimal
let btn_roman_to_decimal = document.querySelector("#decimal-submit");
let span_decimal = document.querySelector("#decimal-Span");


btn_roman_to_decimal.addEventListener("click", function (e) {

    e.preventDefault();
    let response = RomanoParaDecimal();
    span_decimal.innerHTML = response;
    
});
