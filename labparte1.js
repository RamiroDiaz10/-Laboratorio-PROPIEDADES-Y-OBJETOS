



function Biblioteca(autor , libro){
    this.autor = autor;
    this.libro = libro;
    this.prestado = false;




    this.alquilar = function(){
        if(this.prestado === false ){
            this.prestado = true;
            console.log(`el libro : ${this.libro}, del autor: ${this.autor}, esta disponible :)`);      
        }else{
            console.log("El libro no esta diponible ");
            
        }
    }
    
}

let libro1 = new Biblioteca("Gabriel Garcia", "100 años de Soledad")
let libro2 = new Biblioteca("Gabriel Garcia", "El coronel no tiene quien le escriba")

libro1.alquilar();
libro1.alquilar();

Biblioteca()