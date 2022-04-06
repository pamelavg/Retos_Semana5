const ti = "doble";          //Tipo de Hamburguesa-String- sencilla - doble - triple
const n = 10                   //Numero de hamburguesas-Entero
const tp = "tcredito"           //Tipo de pago-String
let pa = 0;                   //Precio de la hamburguesa-Real
let ca = 0;                   //Cargo por el uso de tarjeta-Real
let to = 0;                   //Total sin cargo-Real
let tot = 0;                  //Total con cargo-Real


switch(ti){
    case 'sencilla':
        pa = 20;
        tp === "tcredito"? ca=n*pa*0.05:ca = 0;
        to = n*pa
        tot = n*pa+ca      
    break;

    case  'doble':
        pa = 25;      
        tp === "tcredito"? ca=n*pa*0.05:ca = 0;
        to = n*pa
        tot = n*pa+ca            
    break;

    case  'triple':
        pa = 28;       
        tp === "tcredito"? ca=n*pa*0.05:ca = 0;
        to = n*pa
        tot = n*pa+ca        
    break;

  }

console.log(to);
console.log(tot);