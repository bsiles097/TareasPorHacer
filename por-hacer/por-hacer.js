const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar la información', err);
        }
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const eliminar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
        guardarDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}