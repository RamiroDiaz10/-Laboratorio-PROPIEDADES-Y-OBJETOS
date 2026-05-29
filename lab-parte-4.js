// Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
// usando métodos y condicionales (if/else).
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento.

function Carrito () {
    this.productos = [];
    this.total = 0;
    this.agregarProducto = function(nombre, precio) {
        this.productos.push(nombre, precio);
        this.total = this.total + precio;
    }
    this.calcularDescuento = function (){  
        if (this.total > 100) {
            this.total = this.total - (this.total * 0.10);
            console.log(`Su total a pagar es: ${this.total}`);
        }else if (this.total <= 100 && this.total > 50 ) {
            this.total = this.total - (this.total * 0.05);
            console.log(`Su total a pagar es: ${this.total}`);
            
        }else {
            console.log(`Su total a pagar es: ${this.total}`);

        }
    }

}

let compras = new Carrito();

compras.agregarProducto("papa", 20);
compras.agregarProducto("arroz", 60);
compras.agregarProducto("sal", 30);
console.log(compras.productos)

compras.calcularDescuento();
