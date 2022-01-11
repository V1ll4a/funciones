funcion piso(){
console.log("______________")
console.log("│  [_]  [_]  │ ")
console.log("│   _\\//_   │")
console.log("│  [_]  [_]  │")
console.log("│____________│")
}
funcion pisoBase(){
console.log("______________")
console.log("│  [_]  [_]  │ ")
console.log("│  \\ __ //  │")
console.log("│  [_│  │_]  │")
console.log("│____│__│____│")
}
funcion techo(){
console.log("  ______/\__  ")
console.log("// |      | \\")
console.log("│  │      │  │")
console.log("│__|______|__│")
}
funcion casa(nPisos){
    for(let i=0;i<nPisos;i++){
        techo();
        piso();
        pisoBase();
    }
}
let nPisos= parseInt(prompt("Ingrese el numero de de pisos que desee"))
casa(nPisos);
