// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Enfocar el campo de entrada para facilitar la adición de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Si no hay amigos, mostrar mensaje
    if (amigos.length === 0) {
        const mensajeVacio = document.createElement('li');
        mensajeVacio.textContent = 'No hay amigos en la lista. Agrega algunos nombres.';
        mensajeVacio.style.color = '#888';
        listaAmigos.appendChild(mensajeVacio);
        return;
    }
    
    // Crear elementos para cada amigo
    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        
        // Crear contenedor para el nombre y botón de eliminar
        const contenedor = document.createElement('div');
        contenedor.style.display = 'flex';
        contenedor.style.justifyContent = 'space-between';
        contenedor.style.alignItems = 'center';
        contenedor.style.marginBottom = '8px';
        
        // Nombre del amigo
        const nombreAmigo = document.createElement('span');
        nombreAmigo.textContent = amigo;
        
        // Botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.padding = '5px 10px';
        botonEliminar.style.fontSize = '12px';
        botonEliminar.style.backgroundColor = '#fe652b';
        botonEliminar.style.color = 'white';
        botonEliminar.style.border = 'none';
        botonEliminar.style.borderRadius = '5px';
        botonEliminar.style.cursor = 'pointer';
        
        // Añadir evento para eliminar amigo
        botonEliminar.addEventListener('click', () => {
            eliminarAmigo(index);
        });
        
        // Ensamblar elementos
        contenedor.appendChild(nombreAmigo);
        contenedor.appendChild(botonEliminar);
        itemLista.appendChild(contenedor);
        listaAmigos.appendChild(itemLista);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega al menos un nombre.');
        return;
    }
    
    // Ocultar resultado anterior si existe
    const resultadoAnterior = document.getElementById('resultado');
    resultadoAnterior.innerHTML = '';
    
    // Crear elemento de carga
    const carga = document.createElement('li');
    carga.textContent = 'Sorteando...';
    carga.style.color = '#4B69FD';
    carga.style.fontWeight = 'bold';
    resultadoAnterior.appendChild(carga);
    
    // Simular un breve retraso para el suspense
    setTimeout(() => {
        // Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Obtener el nombre del amigo sorteado
        const amigoSorteado = amigos[indiceAleatorio];
        
        // Mostrar el resultado
        resultadoAnterior.innerHTML = '';
        const resultado = document.createElement('li');
        resultado.textContent = amigoSorteado;
        resultado.style.color = '#05DF05';
        resultado.style.fontSize = '22px';
        resultado.style.fontWeight = 'bold';
        resultado.style.marginTop = '15px';
        resultadoAnterior.appendChild(resultado);
    }, 1500);
}

// Inicializar la lista cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarListaAmigos();
});