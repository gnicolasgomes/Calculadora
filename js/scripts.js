class List{
    constructor(){
        this.lista=[];
        this.listanum1=[];
        this.listanum2=[];
    }
}

let miLista=new List();
let pantalla="Aqui se muestra el resultado";

document.getElementById("b1").addEventListener("click", capturarNum);
document.getElementById("b2").addEventListener("click", capturarNum);
document.getElementById("b3").addEventListener("click", capturarNum);
document.getElementById("b4").addEventListener("click", capturarNum);
document.getElementById("b5").addEventListener("click", capturarNum);
document.getElementById("b6").addEventListener("click", capturarNum);
document.getElementById("b7").addEventListener("click", capturarNum);
document.getElementById("b8").addEventListener("click", capturarNum);
document.getElementById("b9").addEventListener("click", capturarNum);
document.getElementById("b0").addEventListener("click", capturarNum);
document.getElementById("mas").addEventListener("click", capturarNum);
document.getElementById("menos").addEventListener("click", capturarNum);
document.getElementById("multi").addEventListener("click", capturarNum);
document.getElementById("divi").addEventListener("click", capturarNum);
document.getElementById("bigual").addEventListener("click", mostrarRes);
document.getElementById("bc").addEventListener("click", borrarNumPantalla)

function mostrarNumPantalla(num){

    if(pantalla=="Aqui se muestra el resultado" || pantalla=="Error"){
        pantalla="";
        pantalla+=num;
    }
    else{
        pantalla+=num;
    }
    document.getElementById("result").innerHTML=pantalla;
}

function borrarNumPantalla(){
    pantalla="";
    document.getElementById("result").innerHTML=pantalla;
}

function mostrarResPantalla(num){
    pantalla=num;
    document.getElementById("result").innerHTML=pantalla;
}

function capturarNum(evento){
    console.log("Se está ejecutando capturarNum...");
    let variable=evento.target.innerHTML;
    console.log("Se capturó el valor: "+variable);
    miLista.lista.push(variable);
    let listacont=miLista.lista.length;
    console.log("Se muestra la cantidad de elementos del array "+(listacont));
    mostrarNumPantalla(variable);

}

function mostrarRes(){
    let numString1="";
    let numString2="";
    let num1=null;
    let num2=null;
    let symb=null;
    let resultado=null;
    for(let x=0; x<miLista.lista.length; x++){
        if(miLista.lista[x] === "+" || miLista.lista[x] === "-" || miLista.lista[x] === "*" || miLista.lista[x] === "/"){
            symb=miLista.lista[x];
            console.log("se guardo la variable simbolo"+symb)
        }else{
            console.log("Se entro en bucle mostrarres NO simbolo");
            if(symb == null){
                numString1+=miLista.lista[x];
            }else{
                numString2+=miLista.lista[x];
            }
        }
    }
  if(numString1 === "" || numString2 == ""){
      pantalla="Error";
      document.getElementById("result").innerHTML=pantalla;
  }
  else{
    num1=parseInt(numString1);
    num2=parseInt(numString2);
    console.log("este es el numero1 obtenido: "+num1);
    console.log("este es el numero2 obtenido: "+num2);

    switch(symb){
        case "+": resultado=num1+num2; break;
        case "-": resultado=num1-num2; break;
        case "*": resultado=num1*num2; break;
        case "/": resultado=num1/num2; break;
        default: console.log("Se entro en default");
    }
    let resultadoStr="";
    resultadoStr=resultado.toString();
    mostrarResPantalla(resultadoStr);

    console.log("Aqui se muestra el resultado de la operacion: "+resultado)
    }
    numString1="";
    num1=null;
    numString2="";
    num2=null;
    symb=null;
    resultado=null;
    let listaTam=miLista.lista.length;
    miLista.lista.splice(0, (listaTam));
    console.log("Se ha eliminado la lista");
}