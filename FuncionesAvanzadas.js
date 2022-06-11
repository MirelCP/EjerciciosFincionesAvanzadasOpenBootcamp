// Una función sin parámetros que devuelva siempre "true"
function* generaTrue(){ 
     while(true){
         yield true;
     }
}

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asyncFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hola soy una promesa");
        }, 5000);
    });
}

//Una función generadora de índices pares automáticos
function* generaIndicesPares(){
    let id = 0;
    while(true){
        id++;
       
        if(id%2===0){
            yield id;
            return id
        }
    }
}