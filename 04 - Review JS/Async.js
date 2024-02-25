/*
When you are working on a large enterprise system, then you have to interact with multiple systems over http, web sockets ...etc.
some of process are light weight & some of them will be more taking 
so what you will be do when one of the function depend on other.[]
here you have to maintain the order of function calling.
To handle these type of situations we have callbacks, async, promises
lets explore together 
*/

// Promise 
fetch('https://jsonplaceholder.typicode.com/todos/1') // return promise
.then((res)=> res.json())
.then((data)=> console.log(data));



// Async await 
async function getTodo (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    printTodo(data);
}

function printTodo (data) {
    console.log(data);
}

getTodo(2);

console.log('Farhan Shahid Khan'); // See This one is executed first after that other, This is happening bcz other functions are awaiting for result


// You can make promise yourself as well 
function myDisplayer(some) {
    console.log(some)
}
      
let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    // The producing code (this may take some time)
    
    if (x == 0) {
         myResolve("OK");
        } else {
          myReject("Error");
        }
});
      
myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
);