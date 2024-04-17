let opcion;
//En este caso eh declarado mi variable input
do {
    let input = prompt("Bienvenido a nuestro ecommerce de ropa.\nIngrese la opción del producto que desea comprar:\n1. Remeras\n2. Pantalones\n3. Zapatillas\n0. Salir");
    
    if (input !== null && input !== "") {
        opcion = parseInt(input);

        if (!isNaN(opcion)) {
            if (opcion === 1) {
                alert("Usted ha elegido comprar remeras.");
                comprarRemeras();
            } else if (opcion === 2) {
                alert("Usted ha elegido comprar pantalones.");
                comprarPantalones();
            } else if (opcion === 3) {
                alert("Usted ha elegido comprar zapatillas.");
                comprarZapatillas();
            } else if (opcion === 0) {
                alert("Gracias por visitar nuestro ecommerce. ¡Hasta luego!");
            } else {
                alert("Opción no válida. Por favor, ingrese una opción válida.");
            }
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } else {
        alert("Operación cancelada. ¡Hasta luego!");
        opcion = 0; // Establecer opción a 0 para salir del bucle
    }
} while (opcion !== 0);

function comprarRemeras() {
   
}

function comprarPantalones() {
    
}

function comprarZapatillas() {
   
}
