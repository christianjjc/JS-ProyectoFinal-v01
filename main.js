
// algoritmos para preguntar nombre y edad.

let esNombre = false;
let nombre = prompt(`¡Hola! ¿cuál es tu nombre?`);
//nombre == null || nombre.trim() == "" || nombre == undefined
while (esNombre == false) {
    if (nombre == null || nombre.trim() == "" || nombre == undefined) {
        nombre = prompt(`Por favor debe ingresar su nombre...`);
    } else {

        if (isNaN(nombre)) {
            esNombre=true;
        } else {
            nombre = prompt(`Por favor, su nombre no puede ser un número...`);
        };
    }

};
// líneas para desarrollo y pruebas
console.log(nombre);
console.log(typeof (nombre));

let edad = prompt(`¿Qué edad tienes?`);
while (isNaN(edad) || edad == null || edad.trim() == "" || edad == undefined) {
    edad = prompt(`Por favor, sólo se aceptan números...`);
};
// líneas para desarrollo y pruebas
console.log(edad);
console.log(typeof (edad));

if (parseInt(edad) < 18) {
    alert(`Sr(a) ${nombre.toUpperCase()} . Ud. es menor de edad, solo tiene ${edad} años por lo tanto no puede ingresar.`);
} else {
    alert(`Sr(a) ${nombre.toUpperCase()} . Con ${edad} años, Ud. si tiene permitido el ingreso.`)
};

