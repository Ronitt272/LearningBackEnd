// promises and await keyword - help make asynchronous codes behave in a synchronous way
// asynch keyword used before a function means the function always returns a promise

// console.log("Step 1 completed");// Order placing on any ecommerce webpage

// function step_two(callback){
//     console.log("Step 2 completed"); // Order Deliverd at the mentioned destination
//     callback();
// }
// setTimeout(function (){
//    //Items added To cart
//    console.log("Items Added to cart")
//     setTimeout(()=>{
//         // //Proceed To payment
//         console.log("proceed to payment")

//         setTimeout(()=>{
//             console.log("update wallet")
//         }, 500);

//     }, 500);

// }, 1000); // Asynchronous

// Callback hell - happens when multiple callbacks are nested on top of eachother
//methods to escape callback hell - promises and asynch/await
function downloadData(url){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(url !== ""){
                resolve("downloaded successfully");
            }
            else{
                reject("Url is not correct");
            }
        }, 1000);
    });
}

// function printData(data, promise){
//     console.log(data);
//     console.log(promise);
// }
const returnedPromise = downloadData("http://localhost:3000/read");
returnedPromise.then((data)=>{
    console.log(data);
}, (err)=>{
    console.log(err);
})



//Callback functions - function that is executed after another function has been executed