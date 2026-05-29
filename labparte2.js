


function ListaCompras(){
    this.productos = [];
    this.agregar =  function(nuevoProducto ){
        this.productos.push(nuevoProducto)
        
    }
    this.mostrar = function(){
        for (let i = 0; i < this.productos.length ; i++  ){
            console.log( ` ${i + 1} ${this.productos[i]}` );
            
        }
    }
}



let mercado = new ListaCompras()

mercado.agregar("Arroz")
mercado.agregar("Pasta")

mercado.mostrar()