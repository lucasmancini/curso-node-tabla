const fs = require('fs');

const crearArchivo = async (base = 5, listar = false)=>{
        try {
        
            let salida = '';
            for (let index = 1; index <=10; index++) {
                salida += `${index} x ${base} = ${index*base} \n`;
            }            
            
            if(listar){
                console.log('==========================');
                console.log(`      Tabla del ${base}   `);
                console.log('==========================');
                console.log(salida);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            return `tabla-${base}.txt`;
                            
        } catch (error) {
            return error;
        }
}

module.exports = { 
    crearArchivo
};