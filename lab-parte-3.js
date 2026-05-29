// Ejercicio 3: Reproductor de Música
// Tareas:
// 1.Crea un objeto Reproductor usando una función constructora con:
// •Una propiedad estado con valor inicial "detenido" (otros valores
// posibles: "reproduciendo", "pausado").
// 2.Implementa estos métodos:
// •play():
// •Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
// música...".
// •Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
// •pausar():
// •Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
// •Si no, muestra: "No hay música reproduciéndose.".
// •detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".

function Reproductor () {
    this.estado = "detenido";

    this.play = function (){
        if ( this.estado === "detenido" || this.estado === "pausado") {
            this.estado = "reproduciendo";
            console.log("Reproduciendo musica...");
        }else{
            console.log("Ya se está reproduciendo música.");
        }
    }
    this.pausar = function(){
       if ( this.estado === "reproduciendo" ) {
            this.estado = "pausado";
            console.log("Musica pausada...");
        }else{
            console.log("No hay musica reproduciendose");
        } 
    }
    this.detener = function(){
        this.estado = "detenido";
        console.log("Música detenida.")
    }

};

let musica = new Reproductor();
musica.detener();
musica.pausar();
musica.play();
musica.play();
musica.pausar();
musica.pausar();
musica.pausar();

