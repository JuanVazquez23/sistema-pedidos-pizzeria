const partido = () => {
    let equipo1 = prompt("Ingrese el equipo local");
    let equipo2 = prompt('Ingrese el equipo visitante');

    let golesEquipo1 = parseInt(prompt('Ingrese los goles del equipo local'));
    let golesEquipo2 = parseInt(prompt('Ingrese los goles del equipo visitante'));

    if (golesEquipo1 > golesEquipo2) {
        alert(`El ganador del encuentro es ${equipo1.toUpperCase()}`);
        return equipo1;
    } else {
        alert(`El ganador del encuentro es ${equipo2.toUpperCase()}`);
        return equipo2;
    }
}

let cantPartidos = parseInt(prompt('Cuantos partidos queres jugar?'));

for (let i = 0; i < cantPartidos; i++) {
    alert(`Arranca el partido numero ${i + 1}`);
    partido();
}