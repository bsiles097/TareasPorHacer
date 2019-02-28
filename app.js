const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========== Por Hacer =========='.green);
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===============================\n'.green);
        }
        break;
    case 'actualizar':
        let realizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (realizado) {
            console.log('Tarea Actualizada correctamente');
        } else {
            console.log('La Tarea No Se Encontró');
        }
        break;
    case 'eliminar':
        let eliminada = porHacer.eliminar(argv.descripcion);
        if (eliminada) {
            console.log('Tarea Eliminada correctamente');
        } else {
            console.log('La Tarea No Se Encontró');
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;
}