const validator = {
  // ...
  isValid:(creditCardNumber) =>{
    let numPar = 0;
    let numImpar = 0;
    let sum = 0;
   creditCardNumber = Array.from(creditCardNumber).reverse();
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i % 2 == 1) {
        numPar = parseInt(creditCardNumber[i]) * 2;
        if (numPar >=10) {
          numPar = (numPar - 10) + 1;
        }
        sum = numPar + sum;
      } else {
        numImpar = parseInt(creditCardNumber[i]);
        sum = numImpar + sum;
      }
    }
      //console.log;
    
    if (sum % 10 == 0) {
      return true;
    }
    else {
      return false;
    }
  },

  maskify:(creditCardNumber)=>{
   let cantNumber = creditCardNumber.length;
   let maskifyNum = "";
   for (let i = 0; i<cantNumber-4; i++) { 
     maskifyNum += "#";
   } 
   return maskifyNum + creditCardNumber.substring(cantNumber-4, cantNumber);
  }

  /*limpiar:()=>{
    document.getElementById("prueba").reset();
  }*/
}

export default validator;


