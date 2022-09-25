const pedido = () => {
    let pizza = prompt("Que pizza desea llevar?");

    let tamanioPizza = prompt('Que tamaño? [P => (porcion) / C => (chica) / G => (grande)]');
    let tamPizza;
    if (tamanioPizza == 'P' || tamanioPizza == 'p' || tamanioPizza == 'C' || tamanioPizza == 'c' || tamanioPizza == 'G' || tamanioPizza == 'g') {
        tamPizza = queTamanioEs(tamanioPizza);
    } else {
        alert('No es un tamaño valido, por favor recarga la pagina e intenta de nuevo :(');
        return;
    }

    let cantPizza = parseInt(prompt('Que cantidad?'));

    let pedidoOK = prompt(`Usted pidio ${cantPizza} ${tamPizza} de ${pizza}, es correcto? [S/N]`);
    
    if (pedidoOK == 'S' || pedidoOK == 's') {
        alert('Su pedido se ingreso correctamente :)');
        return `Pedido => ${cantPizza} ${tamPizza} de ${pizza}`;
    } else {
        alert('No pudimos ingresar su pedido, por favor recargue la pagina e intente de nuevo :(');
    }
}

const queTamanioEs = (tam) => {
    switch (tam) {
        case 'P':
            return 'porcion/es';
        case 'p':
            return 'porcion/es';
        case 'C':
            return 'chica/s';
        case 'c':
            return 'chica/s';
        case 'G':
            return 'grande/s';
        case 'g':
            return 'grande/s';
    }
}

// MAIN

let cantPedidos = parseInt(prompt('Cuantos pedidos quiere realizar?'));

for (let i = 0; i < cantPedidos; i++) {
    alert(`Pedido numero ${i + 1}`);
    let pedidoString = pedido();
    if (typeof(pedidoString) == 'undefined') {
        console.log('Se rompio, porfa recarga la pagina :(');
        break;
    }
    console.log(pedidoString);
}