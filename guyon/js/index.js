
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
    if (usuario == "") {
        alert("Debe ingresar su usuario");
        return;
    }
    sessionStorage.setItem("usuario", usuario);
    botonLogin.style.display = 'none';
    botonLogout.style.display = 'block';
    welcome.innerHTML = `${usuario}`;
    welcome.style.display = 'block';
}

function funcLogout() {
    sessionStorage.clear();
    window.location.reload();
}


