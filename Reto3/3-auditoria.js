let total =0;                     //Cantidad Total de N productos -number  
var cantToner = 0;                //Cantidad de toner contabilizada - number
var cantCabezal = 0;             //Cantidad de cabezales contabilizadas - number  
var cantTinta = 0;              //Cantidad de tinta contabilizada -number


for(var i = 0 ;i <3;i++){   
let producto = prompt("Ingresar producto: Toner, Cabezal o Tinta");
let cantidad =  Number(prompt("Ingresar la cantidad del producto"));

    switch (producto) {
        case 'Toner':
        cantToner=cantidad ;
        break;

        case 'Cabezal':
        cantCabezal=cantidad ;
        break;

        case 'Tinta':
        cantTinta=cantidad ;
        break;
    }

}

total = cantToner+cantCabezal+cantTinta;
console.log(`La cantidad de Toner es:${cantToner}`)
console.log(`La cantidad de Cabezal es:${cantCabezal}`)
console.log(`La cantidad de Tinta es:${cantTinta}`)
console.log(`La cantidad Total es:${total}`)