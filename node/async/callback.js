//Callback: function used as a parameter in another function
// Higher order function: function that accepts another as parameter

// Example
/** function test(hello){
    hello();
}
test(()=> {
   console.log("hello world");
}); */

import fs from 'fs';
fs. readFile("data/data.txt", "utf-8", (error, data) =>{
    if (error){
        console.log(error);
    } else {
        console.log(data);
    }
})

//Scenario: Read file 1 => SUcess => Read file 2 => Success => Read file 3
fs.readFile("data/file1.txt", "utf-8", (error1, data1) => {
    if (error1){
        console.log(error1);
    } else {
        fs.readFile("data/file2.txt", "utf-8", (error2, data2) => {
            if(error2) {
                console.log(error2);
            } else {
                fs.readFile("data/file3.txt", "utf-8", (error3, data3) => {
                    if (error3) {
                        console.log(error3);
                    }

            }

    }
})
