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
    const salarios = trabajos.map((element) => element.salario);
    console.log(salarios)
    
    const y = [...salarios];
    const x = [];
    for (let index in salarios) {
        x.push(+index +1);
    }

    const xy = y.map((element,index) => element * x[index]);
    const x2 = x.map((element) => element **2);
    const n = x.reduce((total) => total += 1 );
    const Ex = x.reduce((total,current)=> total + current);
    const Ey = y.reduce((total,current)=> total + current);
    const Exy = xy.reduce((total,current)=> total + current);
    const Ex2 = x2.reduce((total,current)=> total + current);
    

    const m = ((Exy - ((Ex * Ey)/ n)) / Ex2 - ((Ex)**2 / n)) 

    const b = (Ey / n) - m * (Ex / n)
}
