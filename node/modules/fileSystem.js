/**
 * fs: file system module of node js, used for file operations
 * create, read, update, delete
 * synchronous: blocking operation
 * asynchronous: non-blocking operation
 */

import fs from 'fs';

// 1. Synchronous method

//Read File
const result = fs.readFileSync("data/data.txt","utf-8");
console.log(result);

//Write File - reaplace old data with new one
fs.writeFileSync("data/file.txt","This is a newly created file");
fs.writeFileSync("data/data.txt","Updated Hello world");


//Update File - add new data without replacing old data
fs.appendFileSync("data/file.txt","This is newly appended")

//Delete File
//fs.rmSync("data/data.json");

// 2. Asynchronuos Method

// Read File
fs.readFile("data/data.txt","utf-8", (error, data)=>{
    if(error){
        console.log(error);
    }else {
        console.log(data);
    }
});

// Write File
//fs.writeFile("data/data.json", JSON.stringify({name: "Ram"}));