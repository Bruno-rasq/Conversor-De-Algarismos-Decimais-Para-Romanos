export function DecimalParaRoman(){

    let n = document.querySelector("#decimal").value;

    const Map = {
        u: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //unidade
        d: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //dezena
        c: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //centena
        m: ["M", "MM", "MMM", "MMMM", "MMMMM"] // milhar
    };


    if( n < 0 && n > 5999){

        window.alert("Valor inválido");

    } else {
        
        let NumberToString = Number(n).toString();
        let arry = NumberToString.split('').reverse();

        let uni = Number(arry[0]);
        let dez = Number(arry[1]);
        let cen = Number(arry[2]);
        let mil = Number(arry[3]);

        arry[0] = Map.u[uni - 1] ?? "";
        arry[1] = Map.d[dez - 1] ?? "";
        arry[2] = Map.c[cen - 1] ?? "";
        arry[3] = Map.m[mil - 1] ?? "";

        let response = arry.reverse().join('');

        document.querySelector("#decimal").value='';

        // adicionando o resultado ao span visual
         return response;
        
    };

}