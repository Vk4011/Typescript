
type user={
    firstName : string;
    lastName : string;
    age: number
}

interface user2{
    firstName : string;
    lastName : string;
    age: number
}

function islegal(user:user){
    if(user.age>18){
        console.log("\n\t true \n");
    }else{
        console.log("\n\t false \n");
    }
}

islegal({
    firstName:"vikram",
    lastName:"ram",
    age:18
});


