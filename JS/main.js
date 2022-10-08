class Pedido { // tipo => [pizza | empanada]
    constructor (tipo, sabor, tamanio, cantidad, precio) {
        this.tipo = tipo;
        this.sabor = sabor;
        this.tamanio = tamanio;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const precios = {
    empanada: 200,
    porcionPizza: 200,
    pizzaChica: 1000,
    pizzaGrande: 1500
}

function pedido() {
    let tipoChar = prompt('Lleva [P](pizza) o [E](empanada)?');
    let tipo = queTipoEs(tipoChar);
    if (tipo == 'rompio') { return; }

    let sabor = prompt("Que sabor desea llevar?");

    const tamanio = calcularTamanio(tipo);

    let cant = parseInt(prompt('Que cantidad?'));

    const precio = calcularPrecio(tipo, tamanio, cant);

    const pedido = new Pedido(tipo, sabor, tamanio, cant, precio); // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    let pedidoOK;
    if (tipoChar == 'P' || tipoChar == 'p') {
        if (tamanio == 'porcion/es') {
            pedidoOK = prompt(`Usted pidio ${pedido.cantidad} ${pedido.tamanio} de ${pedido.sabor}, es correcto? [S/N]`);
        } else {
            pedidoOK = prompt(`Usted pidio ${pedido.cantidad} ${pedido.tipo} ${pedido.tamanio} de ${pedido.sabor}, es correcto? [S/N]`);
        }
    } else {
        pedidoOK = prompt(`Usted pidio ${pedido.cantidad} ${pedido.tipo} de ${pedido.sabor}, es correcto? [S/N]`);
    }

    if (pedidoOK == 'S' || pedidoOK == 's') {
        alert('Su pedido se ingreso correctamente :)');
        agregarAlCarrito(pedido);
        alert(`Este pedido cuesta $${pedido.precio}`);
        return pedido;
    } else {
        alert('No pudimos ingresar su pedido, por favor recargue la pagina e intente de nuevo :(');
    }
}

const calcularPrecio = (tipo, tam, cant) => {
    let total;
    if (tipo == 'pizza/s') {
        switch (tam) {
            case 'porcion/es':
                total = precios.porcionPizza * cant;
                break;
            case 'chica/s':
                total = precios.pizzaChica * cant;
                break;
            case 'grande/s':
                total = precios.pizzaGrande * cant;
                break;            
        }
    } else {
        total = precios.empanada * cant;
    }
    return total;
}

const queTipoEs = (char) => {
    if (char == 'P' || char == 'p') {
        return 'pizza/s';
    } 
    else if (char == 'E' || char == 'e') {
        return 'empanada/s';
    } else {
        alert('No es un tipo valido, por favor recarga la pagina e intenta de nuevo :(');
        return 'rompio';
    }
}

const calcularTamanio = (tipo) => {
    const tamaniosLista = ['P', 'p', 'C', 'c', 'G', 'g'];

    if (tipo == 'pizza/s') {
        let tamanioPizza = prompt('Que tamaño? [P => (porcion) / C => (chica) / G => (grande)]');
        if (tamaniosLista.includes(tamanioPizza)) {
            let tamPizza = queTamanioEs(tamanioPizza);
            return tamPizza;
        } else {
            alert('No es un tamaño valido, por favor recarga la pagina e intenta de nuevo :(');
        }
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

const carrito = {
    pedidos: [],
    total: 0
}

const agregarAlCarrito = (pedido) => {
    carrito.pedidos.push(pedido);
    carrito.total += pedido.precio;
}

// MAIN

let cantPedidos = parseInt(prompt('Cuantos pedidos quiere realizar?'));

for (let i = 0; i < cantPedidos; i++) {
    alert(`Pedido numero ${i + 1}`);
    let pedid = pedido();
    console.log(pedid);
}
console.log('Este es el carrito actual:')
console.log(carrito)