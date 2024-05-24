const promiseOne=new Promise(function(resolve,reject){
    //DO ASYNC TASK
    //DB CALLS ,NETWORK,CRYTOGRAPHY

    setTimeout(() => {
        console.log('Async task one complete')
        resolve();
    },  1000);
});
promiseOne.then(function(){
    console.log(" Async Promise one  completed ");
})


new Promise(function(resolve,reject){
    
    
    setTimeout(() => {
        console.log('Async task two complete')
        resolve();
    }, 1000);
}).then(function(){
   console.log("Async 2 promise completed");
});


const promiseThree=new Promise(function(resolve,reject){
     setInterval(function(){
       resolve({username:"anand",email:"anandkr7808@gmail.com"});
     },1000)
})
promiseThree.then(function(user){
     console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setInterval(function(){
        let error=true;
        if(!error){
            resolve({file_Name:"SUPREME",password:"21bcs7338"})
        }
        else{
            reject("something went wrong")
        }


    },1000)
})

// promiseFour
.then((user)=>{
     console.log(user);
     return user.file_Name
})
.then(function(user){
   console.log(user);
})
.catch(function(e){
    console.log(e);
})
.finally(function(){
    console.log("Finally done")
});


const PromiseFive=new Promise(function(resolve,reject){
    setInterval(function(){
        let error=true;
        if(!error){
            resolve({Name:"Anand",password:"7338"})
        }
        else{
            reject("Error js then");
        }

    },1000)
});

async function consumeFive(){
    try{
        const response=await PromiseFive;
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
    
}
consumeFive();

async function getAllusers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json();
        console.log(data);
    }
    catch(e){
        console.log("Error",e);
    }
    
}
getAllusers();

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
     return  response.json();
     
}).then((data)=>{
   console.log(data);
})
.catch(function(e){
    console.log("Error",e)
}).finally(function(){
    console.log("Done All")
})