//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;

    return precioConDescuento;
}

const cupones = [
    {
        nombre: "descuento 15",
        descuento: 15,
    },
    {
        nombre: "descuento 30",
        descuento: 30,
    },
    {
        nombre: "descuento 40",
        descuento: 40,
    },
];




function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCupones = document.getElementById("InputCupones");
    const cuponesValue = inputCupones.value;

    const elCuponValueValid = function (cupones) {
        return cupones.nombre === cuponesValue;
    
    };
    
    const userCoupon = cupones.find(elCuponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + cuponesValue + " no es válido");
    } else {
        const descuento = userCoupon.descuento;    
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
    }
}



//console.log( {
//    precioOriginal, 
//   descuento, 
//    porcentajePrecioConDescuento, 
//    precioConDescuento
//});
//let descuento; 

 //   switch(cuponesValue) {
  //      case cupones[0]: //"descuento 15"
   //     descuento = 15;
    //    break;
    //    case cupones[1]: //"descuento 30"
   //     descuento = 30;
   //     break;
    //    case cupones[2]: //"descuento 40"
    //    descuento = 40;
    //    break;
   // }



