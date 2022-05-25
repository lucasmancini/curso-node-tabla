const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');
                    description: 'Lista la tabla en base solicitada'

const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

console.clear();

crearArchivo( argv.b , argv.l )
    .then( nombreArchivo => console.log(`${nombreArchivo} Creado`.rainbow) )
    .catch( err => console.log(err.error) );



    console.log('this is an error'.error); // outputs green text
    console.log('this is a help'.help); // outputs green text

    console.log('i like cake and pies'.underline.red) // outputs red underlined text
    console.log('inverse the color'.inverse); // inverses the color
    console.log('OMG Rainbows!'.rainbow); // rainbow
    console.log('Run the trap'.trap); // Drops the bass