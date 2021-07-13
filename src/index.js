import validator from './validator.js';

// Validación tarjeta.
document.getElementById("confirmar").addEventListener("click", () => {
  let creditCardNumber = document.getElementById("numeroTarjeta");
  if (creditCardNumber.value===""||creditCardNumber.value==null) {
  
    alert ("Por favor ingrese su número de tarjeta de crédito");
  } 
  else if (validator.isValid(creditCardNumber.value)===false) {

    alert("Tarjeta invalida, por favor introduzca nuevamente el número de su tarjeta"); 
  }
  else if (validator.isValid(creditCardNumber.value)==true) {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("gracias").style.display = "block";  
  } 
 
}); 

document.getElementById("numeroTarjeta").addEventListener("keyup", function(event){
  const insertNum=event.target.value;
  let ocult = validator.maskify(insertNum);
  let  noMostrar = document.getElementById("numeroTarjeta");
  noMostrar.type = "text";
  document.getElementById("numeroTarjeta2").value = ocult;
});

/*document.getElementById("confirmar").addEventListener("click", ()=>{validator.limpiar()
});*/

console.log(validator);