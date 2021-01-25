// import validator from './validator.js'; 

//console.log(validator);
const idPage2 = document.getElementById("page2");
const idPage1 = document.getElementById("page1");
//boton registrar//
const btnRegistrar = document.getElementById("Registrar");
btnRegistrar.addEventListener("click", function(){

idPage2.classList.remove("ocultar");
idPage1.classList.add("ocultar");
});
//boton ingresar//
const btnIngresar = document.getElementById("Ingresar");
btnIngresar.addEventListener("click",function(){
const idPage3 = document.getElementById("page3");
const idPage1 = document.getElementById("page1");
idPage3.classList.remove("ocultar");
idPage1.classList.add("ocultar");
});
  //boton siguiente-Ingresar datos//
const btnSiguiente = document.getElementById("Siguiente");
btnSiguiente.addEventListener("click",function(){
const idPage3 = document.getElementById("page3");
const idPage2 = document.getElementById("page2");
const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const mensaje = document.getElementById("mensaje"); 
 if(nombre.value.length<6){
  mensaje.innerHTML = `Los datos no son validos <br>`
  
 }
 else if(dni.value.length<8){
  mensaje.innerHTML = `Los datos no son validos <br>`
 }
 else{
  idPage3.classList.remove("ocultar");
  idPage2.classList.add("ocultar");
 }

});
 //boton siguiente1//
 const btnSiguiente1 = document.getElementById("submitBtn");
 btnSiguiente1.addEventListener("click",function(){
 const idPage4 = document.getElementById("page4");
 const idPage3 = document.getElementById("page3");
 idPage4.classList.remove("ocultar");
 idPage3.classList.add("ocultar");
 });
 //boton salir//
 const btnSalir = document.getElementById("Salir");
 btnSalir.addEventListener("click",function(){
 const idPage1 = document.getElementById("page1");
 const idPage4 = document.getElementById("page4");
 idPage1.classList.remove("ocultar");
 idPage4.classList.add("ocultar");
 });

 //Validar el numero de tarjeta//
 //Algoritmo de luhn//
 function getUserInput() {
     return document.getElementById("userNum").value;
  }

 //Validacion de algoritmo de luhn//
 function luhnCheck(){
    var cardNum = getUserInput();
    var cardNumSplit = cardNum.split("");
    var sum = 0, validCard = false;
    var singleNum = [], doubleNum = [], finalArry = undefined;
    if((!/\d{15,16}(~W[a-zA-Z])*$/g.test(cardNum)) || (cardNum.length > 16)) {
        return false;
    }
    
    if(cardNum.length === 15){
       for(var i = cardNumSplit.length-1; i>=0; i--){
          if(i % 2 === 0 ) {
              singleNum.push(cardNumSplit[i]);
          }else{
              doubleNum.push((cardNumSplit[i] * 2).toString( ));
          }
       } 
    }else if(cardNum.length === 16){
        for(var i = cardNumSplit.length-1; i>=0; i--){
            if(i % 2 !== 0 ) {
                singleNum.push(cardNumSplit[i]);
            }else{
                doubleNum.push((cardNumSplit[i] * 2).toString());
            }
         }
    }
    doubleNum = doubleNum.join("").split("");
    finalArry = doubleNum.concat(singleNum);
    for(var j = 0 ; j<finalArry.length; j++){
        sum += parseInt(finalArry[j],10); 
    }
    if(sum % 10 === 0){
        validCard = true;
    }
    alert(validCard);
    console.log(sum);
    return validCard;
 }

 //tipo de tarjeta//
 function typeCard(){

 }

 document.getElementById("submitBtn").addEventListener("click",function(){
     document.getElementById("resultLuhn").innerHTML = luhnCheck();
 }, false); 

 //Ocultar el numero de tarjeta menos los 4 ultimos digitos//
function maskify(cardNum){
    var cardNum = getUserInput();
  return cardNumSplit('').map((letter, idx) => idx < cardNum.length - 4 ? '*' : letter).join('');
}
