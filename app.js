const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


//console.log(argv);
// console.log(process.argv);
// console.log(base);

const { base, listar, hasta } = argv;

 crearArchivo(base , listar, hasta)
     .then (response => console.log(response))
     .catch( error => console.log(error));
