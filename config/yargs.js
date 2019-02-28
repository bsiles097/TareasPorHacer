const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como pendiente o completada la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}