const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe: 'Base solicitada'
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:true,
                    default: false,
                    describe: 'Lista la tabla en base solicitada'
                })
                .check((argv, option)=> {
                    if( isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;