/*
function calcValor(){
    // zerando total
    document.getElementById("total").value = '0';
 
    // valor líquido
    var VTOTALLIQUIDO = parseFloat(document.getElementById("valor1").value);
 
    // desconto em porcentagem
    var DESCONTO1 = parseFloat(document.getElementById("desconto1").value);
    if( isNaN ( DESCONTO1 ) ){
        DESCONTO1 = 0;
    }
    var PDESCONTO = parseFloat( ( VTOTALLIQUIDO * DESCONTO1 ) / 100 );
 
    // desconto em valor
    var VDESCONTO = parseFloat(document.getElementById("desconto2").value);
    if( isNaN ( VDESCONTO ) ){
        VDESCONTO = 0;
    }
 
    var TOTAL = parseFloat(VTOTALLIQUIDO) - parseFloat(PDESCONTO) - parseFloat(VDESCONTO);
 
    document.getElementById("total").value = 'R$ ' + TOTAL.toFixed(2);
}
*/
