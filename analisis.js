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
    const salarios = trabajos.map((element) => element.salario);
    
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
    
    const b = ((n * Exy) - (Ex * Ey))/((n * Ex2) - (Ex**2)) 
    const a = (Ey - b * Ex) / n
    let nextY = (a + b * (x.length +1)).toFixed(2) 

    console.log(nextY)
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = []

    for (let i= 1; i < trabajos.length ; i++ ) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i -1].salario;
        const incremento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = incremento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    console.log(porcentajesCrecimiento)

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    // console.log(porcentajesCrecimiento, medianaPorcentajesCrecimiento)
    // console.log(salariosPersona)  
    const nuevoSalarioPersona = trabajos[trabajos.length -1].salario * (1 + medianaPorcentajesCrecimiento)
    console.log(nuevoSalarioPersona.toFixed(2))
}

