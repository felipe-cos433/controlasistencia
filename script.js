function controlDeAsistencia(){
    let cantidadParticipantes = parseInt(prompt("Ingrese la cantidad de participantes"));
    let horaIngreso = prompt("Ingrese la hora de ingreso(Formato 24 horas - HH:MM):")
    let totalAsistencia = 0;
    let totalTarde = 0;

    for (let i = 1; i <=cantidadParticipantes;i++){

        let nombre = prompt(`ingrese el nombre del participante ${i};`);
        let horalLegada = prompt(`ingrese la hora de llegada ${nombre}(formato 24 horas - HH:MM):`);
    

    let esTarde = verificarTardanza(horalLegada,horaIngreso);
    let puntaje = calcularPuntaje(esTarde);

    console.log(`${nombre} llego a las ${horalLegada} y tiene un puntaje de ${puntaje}%.`);

    totalAsistencia++;
    if(esTarde){
        totalTarde++
    }
  }

 mostrarResumen(totalAsistencia,totalTarde);


 function verificarTardanza(horalLegada,horaIngreso){
    if(horalLegada > horaIngreso){
        return true;
    }else{
        return false
    }
}
function calcularPuntaje(esTarde){
    if (esTarde){
        return 50;
    }else{
        return 100;
    }
}


function mostrarResumen(totalAsistencia,totalTarde){
    console.log("Resumen de la asistencia: ");
    console.log("total de asistencia: " + totalAsistencia);
    console.log("Participantes que llegaron tarde: " + totalTarde);
    console.log("Participantes puntuales: " + (totalAsistencia - totalTarde));
}
 
controlDeAsistencia();

}




