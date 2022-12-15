
const ingresaNombre = () => {
    let esNombre = false;
    let nombre = prompt(`¡Hola! ¿cuál es tu nombre?`);
    while (esNombre == false) {
        if (nombre == null || nombre.trim() == "" || nombre == undefined) {
            nombre = prompt(`Por favor debe ingresar su nombre...`);
        } else {
            if (isNaN(nombre)) {
                esNombre = true;
                return nombre
            } else {
                nombre = prompt(`Por favor, su nombre no puede ser un número...`);
            };
        }
    };
}

const ingresaEdad = (nombre) => {
    let edad = prompt(`¿Qué edad tienes?`);
    while (isNaN(edad) || edad == null || edad.trim() == "" || edad == undefined) {
        edad = prompt(`Por favor, sólo se aceptan números...`);
    };
    if (mayorDeEdad(edad)) {
        alert(`Sr(a) ${nombre.toUpperCase()} . Con ${edad} años, Ud. si tiene permitido el ingreso.`)
    } else {
        alert(`Sr(a) ${nombre.toUpperCase()} . Ud. es menor de edad, solo tiene ${edad} años por lo tanto no puede ingresar.`);
    };
}

const mayorDeEdad = (edad) => {
    if (parseInt(edad) < 18) {
        return false;
    } else {
        return true;
    };
}

ingresaEdad(ingresaNombre());

