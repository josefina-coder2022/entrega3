// Creo los objetos

let propiedades = JSON.parse(localStorage.getItem("propiedades"));
let container = document.getElementById("contenedorPropiedades");

if (propiedades == null) {
    propiedades = [];
}

// Traigo el contenedor con las Cards y lo itero con el "forEach"

function mostrarPropiedades() {

    container.innerHTML = "";

    propiedades.forEach(element => {
        container.innerHTML += '<div class = "col-sm-4" ><div class = "card" > <div class = ' + '"card-body"><h5 class = "card-title" >' + element.nombre + '</h5> <p class = "card-text" > ' + element.precio + ' </p> <p class = ' + '"card-text" > ' + element.ubicacion + ' </p> <a href = "#"class = "btn btn-dark" >  ' + 'CONSULTAR </a> </div> </div> </div>';
    });
}

mostrarPropiedades();

// Inicio login

let welcome = document.getElementById("welcome");
let botonLogin = document.getElementById("botonLogin");
let botonLogout = document.getElementById("botonLogout");
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    usuario = usuarioStorage;
    botonLogin.style.display = 'none';
    botonLogout.style.display = 'block';
    welcome.innerHTML = `${usuario}`;
    welcome.style.display = 'block';
}

function funcLogin() {
    usuario = prompt("Ingrese el usuario");
    if (usuario == "" || usuario == null) {
        alert("Debe ingresar su usuario");
        return;
    }
    sessionStorage.setItem("usuario", usuario);
    usuarioStorage = usuario;
    botonLogin.style.display = 'none';
    botonLogout.style.display = 'block';
    welcome.innerHTML = `${usuario}`;
    welcome.style.display = 'block';
}

function funcLogout() {
    sessionStorage.clear();
    window.location.reload();
}

// Agregar un inmueble al array

let botonPublicar = document.getElementById("botonPublicar");

const publicarPropiedad = (nombre, ubicacion, precio) => {

    let nuevaPropiedad = {
        id: propiedades.length + 1,
        nombre: nombre,
        ubicacion: ubicacion,
        precio: precio,
    };

    propiedades.push(nuevaPropiedad);
    localStorage.setItem("propiedades", JSON.stringify(propiedades));
    mostrarPropiedades();
};

function cargarPropiedad() {

    if (!usuarioStorage) {
        alert("Tiene que iniciar sesion para publicar las propiedades");
        return;
    }

    let nombre = prompt("Ingrese el nombre del inmueble que quiere publicar");
    let ubicacion = prompt("Ingrese la ubicación del inmueble que quiere publicar");
    let precio = prompt("Ingrese el precio del inmueble que quiere publicar");

    if (nombre == null || ubicacion == null || precio == null || nombre == "" || ubicacion == "" || precio == "") {
        alert("Debe ingresar todos los datos para cargar la propiedad");
        return;
    }

    publicarPropiedad(nombre, ubicacion, precio);
}



// Para buscar un inmueble que está en el array

let valorBusqueda = document.getElementById("valorBusqueda");

function buscarPropiedad() {

    if (valorBusqueda.value == "") {
        alert("Debe ingresar un valor de busqueda");
        return;
    }

    let encontrado = propiedades.filter((inmueble) => inmueble.nombre.toLowerCase() == valorBusqueda.value.toLowerCase());

    container.innerHTML = "";

    encontrado.forEach(element => {
        container.innerHTML += '<div class = "col-sm-4" ><div class = "card" > <div class = ' + '"card-body"><h5 class = "card-title" >' + element.nombre + '</h5> <p class = "card-text" > ' + element.precio + ' </p> <p class = ' + '"card-text" > ' + element.ubicacion + ' </p> <a href = "#"class = "btn btn-dark" >  ' + 'CONSULTAR </a> </div> </div> </div>';
    });

    container.innerHTML += '<div class="clearfix"></div>';

}

/*

const propiedades = [{
        id: "1",
        nombre: "Casa, 3 dormitorios",
        operación: "Alquiler",
        ubicación: "Zona Norte, B° Cerro de las Rosas - Córdoba",
    },
    {
        id: "2",
        nombre: "Departamento, 2 dormitorios",
        operación: "Venta",
        ubicación: "Zona Sur, B° General Paz - Córdoba",
    },
    {
        id: "3",
        nombre: "Casa, 3 dormitorios",
        operación: "Venta",
        ubicación: "Zona Sur, B° Junior - Córdoba",
    },
    {
        id: "4",
        nombre: "Terreno, 400 mts",
        operación: "Venta",
        ubicación: "Zona Sur, Prados de manantiales - Córdoba",
    },
    {
        id: "5",
        nombre: "Terreno, 350 mts",
        operación: "Venta",
        ubicación: "Zona Sur, Terrazas de manantiales - Córdoba",
    },
    {
        id: "6",
        nombre: "Departamento, 3 dormitorios",
        operación: "Alquiler",
        ubicación: "Zona Centro - Córdoba",
    },
];
*/