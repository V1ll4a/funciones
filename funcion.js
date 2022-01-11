let nPisos: Number(prompt("Ingrese el numero de pisos que desee"))
let nPisosBase: Number(prompt("Ingrese el numero de pisos que quiera"))
funcion piso(){
console.log("______________")
console.log("│  [_]  [_]  │ ")
console.log("│   _\\//_   │")
console.log("│  [_]  [_]  │")
console.log("│____________│")
}
funcion pisoBase(nPisosBase){
console.log("______________")
console.log("│  [_]  [_]  │ ")
console.log("│  \\ __ //  │")
console.log("│  [_│  │_]  │")
console.log("│____│__│____│")
}
funcion techo(ancho){
console.log("  ______/\__  ")
console.log("// |      | \\")
console.log("│  │      │  │")
console.log("│__|______|__│")
}
funcion casa(nPisos){
    for(let i=0;i<nPisos;i++){
        techo(ancho)
        piso(ancho)
        pisoBase(ancho)
    }
}
