console.log(salarios)

// Analisis personal para Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find((persona) => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const salarios = []
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    // esta es la solucion que se me ocurrio
    trabajos.forEach(elemento => salarios.push(elemento.salario))
    // en la clase el profesor mostro la opcion usando .map
    // const salarios = trabajos.map((elemento) => elemento.salario);
    
    const medianaSalarios = PlatziMath.calcularMediana(salarios)
    

    return medianaSalarios
}


function proyeccionSalarial(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos)
    const salarios = trabajos.map((elemento) => elemento.salario);
    console.log(salarios)
    
    const x = [];
    for (let index in salarios) {
        x.push(index);
    }

    console.log(x)
}