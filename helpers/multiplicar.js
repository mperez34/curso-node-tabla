const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5,listar = false, hasta = 10) => {

    try {
        

        let salida = '';

        for ( let i=1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        if (listar === true) {
            console.log('================================='.blue);
            console.log(`       TABLA DEL: ${ base }       `.underline.blue);
            console.log('================================='.blue);
            console.log(salida.green);
            return `tabla-${base}.txt`.red;
        } else {
            return 'Creado';
        }

        


    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    crearArchivo
}