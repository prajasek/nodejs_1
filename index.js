const fs = require('fs');

console.log("Start...")

async function read() {
    console.log("Start Async")
    let data =  fs.readFileSync('./files/1.txt', 'utf8')
    console.log("-->", data);
    //await fs.mkdirSync('./files/file/', () => {});
    data = data.replaceAll('*', '-');
    data = data.replaceAll('1.txt', 'hello.csv');

    console.log(data)
    fs.writeFileSync('./files/2.txt', data);
    let data2 =  fs.readFileSync('./files/2.txt', 'utf8')
    console.log("-->", data2);
}

read();
console.log("End...")

