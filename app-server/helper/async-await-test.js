

async function b(a) {
   var pr = new Promise(function(resolve, reject) {

       var res = 3;
       setTimeout( ()=>{
           resolve(a * a);
       }, 1000);

   });
    return pr;
}


async function d(){
    var k =1 ;
    try {
        k = await b(100);
    } catch (e){
        console.log('error');
    }

}
d();