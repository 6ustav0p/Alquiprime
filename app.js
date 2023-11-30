'use strict';
const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    } 
    console.log('current class name: ' + className);
});

let carrito = []; // Arreglo para almacenar los productos en el carrito

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  const producto = {
    id: Date.now(), // Generamos un ID único para cada producto agregado
    nombre: nombre,
    precio: precio
  };
  carrito.push(producto);
  mostrarCarrito();
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  mostrarCarrito();
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = ''; // Limpiamos el contenido del carrito antes de mostrar los productos

  let total = 0;

  carrito.forEach((producto) => {
    const { id, nombre, precio } = producto;
    const itemCarrito = document.createElement('li');
    itemCarrito.textContent = `${nombre} - Precio: $${precio}`;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarDelCarrito(id);

    itemCarrito.appendChild(botonEliminar);
    listaCarrito.appendChild(itemCarrito);

    total += precio;
  });

  const totalCarrito = document.getElementById('total-carrito');
  totalCarrito.textContent = total;
  localStorage.setItem('carrito', JSON.stringify(carrito));

}