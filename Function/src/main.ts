


console.log("\n\t Callback function in typescript \n");
let a=()=>{console.log("\n\t Function is calling...!")}

function callback(cb: ()=>void){
    setTimeout(cb,2000);
}

callback(a);

const fn :(a:any)=>void=(a)=>{
    console.log("hello");
    console.log("\n\t Implicity & explicity \n");
    return 5;
}

