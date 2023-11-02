function getValue() {

    let input = document.querySelector('#decimal');
    let value = input.value;
    let span = document.querySelector('#span-decimal')

    const Map = {
        u: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //unidade
        d: ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //dezena
        c: ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //centena
        m: ["M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"] // milhar
    };

    if(value <= 0 || value > 99999) span.innerHTML = 'ERRO: Valor Inserido Inválido!';
    else {

        let NumberToString = Number(value).toString();
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
    
        span.innerHTML = response
    }

};