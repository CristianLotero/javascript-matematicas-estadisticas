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
    const nuevoSalarioPersona = trabajos[trabajos.length -1].salario * (1 + medianaPorcentajesCrecimiento)
    console.log(nuevoSalarioPersona.toFixed(2))
}

// Analisis empresarial
// Crear un OBJ que contenga ELEMENTS ; como KEY cada una de las empresas (en las cuales han trabajado las personas, por cada año), y como VALUE un OBJ que contenga (como KEY) los años, y como VALUE un ARRAY que contenga ARRAYs con los salarios de cada persona.

/*{
    Industria Mokepon: {
        2018: [salario,salario,salario]
        2019:
        2025:
        2026:
    },
    Otra Empresa0: {};
    Otra Empresa1: {};
    Otra Empresa2: {};
    Otra Empresa3: {};
}
*/


// utilizar arr.filter() para filtrar si hay existencia de la empresa
// function empresasFill (arr) {
    //     if (!alreadyExists(arr)) {
        
        //     }
        
    // }




const empresas = {
    fillWithSalarios: function(trabajo, anio, salario) {
        return this[trabajo][anio].push(salario); 
    }
};


function alreadyExists (arr) {
    for (persona of arr) {
        const personaTrabajos = persona.trabajos;
        for ( trabajo of personaTrabajos){
            let trabajoEmpresaString = [trabajo.empresa].toString()
            let trabajoYearString = trabajo.year.toString()
            if (!empresas.hasOwnProperty(trabajoEmpresaString)){
                console.warn(`creando ${trabajoEmpresaString}`)
                empresas[trabajoEmpresaString] = {}; 
            }
            if (!empresas[trabajoEmpresaString].hasOwnProperty(trabajoYearString)) {
                console.log(`creando ${trabajoEmpresaString} ${trabajoYearString}`);
                empresas[trabajoEmpresaString][trabajoYearString] = [];
                console.log(empresas[trabajoYearString]);
            }
            empresas.fillWithSalarios(trabajoEmpresaString, trabajoYearString, trabajo.salario);
        }
    }
    console.log(empresas)
}

function empresasDataCount(obj) {

    const copyOfObj = [...obj]
    for (empresa in copyOfObj) {
        const yearSalaryAcc = [];
        for (year in empresa) {
            const copyOfYear = [...year]
            copyOfYear.reduce((total, el) => total = el / el );
            yearSalaryAcc.push(copyOfYear);

        }
    }
    yearSalaryAcc.reduce((total, el) => total = el / el );
    console.log(copyOfObj)
}