const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Please enter your name:", ans=>{
    console.log("Hello", ans);
    r1.close();
})