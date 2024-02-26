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