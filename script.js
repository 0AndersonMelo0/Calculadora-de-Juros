function calcular(){

    var elemet = getE();

    var jsimples = elemet[0]+((elemet[1]/100)*elemet[0])*elemet[2];

    document.getElementById("ttt").innerText = `R$${jsimples.toFixed(2)}`;
}
function calcular2(){
   
    var elemet = getE();

    var dinheiro = elemet[0];

    for(i=1;i<=elemet[2];i++){
        dinheiro=dinheiro+(dinheiro*elemet[1]/100);
    }

    document.getElementById("ttt2").innerText = `R$${dinheiro.toFixed(2)}`;
}

function getE(){
    var dinh = document.getElementById("dinheirinho").value;
    var dinheiro = Number(dinh);

    var jur = document.getElementById("selik").value;
    var juros = Number(jur);

    var mes = document.getElementById("meses").value;
    var meses = Number(mes);

    if(meses%2 == 0 || meses%2 == 1){
        if (dinh=="" || jur=="" || mes==""){
            alert(` ${'\u25CD'.repeat(17)} \u25C9 ${'\u25CD'.repeat(17)} \r\u274C Digite Valores Válidos!! \u274C`)
            location.reload();
        }else if(meses>=3600){
            alert(`${'\u274C'.repeat(23)}${'\u274C'.repeat(5)}NIMGÉM VIVE ESTE TANTO DE ANOS!!!${'\u274C'.repeat(5)}\r${'\u274C'.repeat(23)}`)
            location.reload();
        }else{
            return [dinheiro, juros, meses];
        }
    }else{
        alert(` ${'\u25CD'.repeat(17)} \u25C9 ${'\u25CD'.repeat(17)} \r\u274C DIGITE UM NÚMERO DE MESES VÁLIDO!! \u274C`)
        location.reload();
    }
}
