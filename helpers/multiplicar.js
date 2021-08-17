const fs= require('fs');
const colors = require('colors');
const art = require("ascii-art");

const crearArchivo = async( base = 5,listar=false,tope=10 ) => {
    try {
        let salida= '';

        
        for( let i = 1; i<=tope; i++) {
            salida+= `${ base } x ${ i } = ${ base *i}\n`;
        }

        if(listar){
            console.log('============================================================'.rainbow);
            try{
                let rendered = await art.font("Tabla del:  "+base, 'Doom').completed()
                //rendered is the ascii
                console.log(rendered.rainbow);
            }catch(err){
                //err is an error
                console.log(err);
            }
            //console.log('     Tabla del '.rainbow,base.toString().rainbow);
            console.log('============================================================'.rainbow);
        
            console.log(salida);
        }
        archivoNombre=`./salida/tabla-${base}.txt`
    
        fs.writeFileSync(archivoNombre, salida);
    
        return( archivoNombre );    
    }catch( err ) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}


