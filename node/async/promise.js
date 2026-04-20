// Promise: Async programming, promise is a future value
//pending -> fulfilled, rejected

import { error } from "console";
import fs from "fs/promises";

fs.readFile("data/data.txt", "utf-8".then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(()=> {
    console.log("Finally");
});