const fs = require('fs');
const {v4:uuid} = require('uuid');
const door = require('./custom-events')



console.log('-----------------')

door.on('open', f1);
door.prependListener('open', f2);

console.log(door.listeners('open'))
door.emit('open');
door.emit('open');
door.emit('open');
door.emit('close');
door.removeListener('open', f1);

console.log(door.listeners('open'))

door.removeAllListeners('open')

function f1() {
    console.log("door opened f1")
}

function f2() {
    console.log("door closed f2")
}
// async function read() {
//     console.log("Start Async")
//     let data =  fs.readFileSync('./files/1.txt', 'utf8')
//     console.log("-->", data);
//     //await fs.mkdirSync('./files/file/', () => {});
//     data = data.replaceAll('*', '-');
//     data = data.replaceAll('1.txt', 'hello.csv');


//     console.log(data)
//     fs.writeFileSync('./files/2.txt', data);
//     let data2 =  fs.readFileSync('./files/2.txt', 'utf8')
//     console.log("-->", data2);
// }

// read();
// console.log("End...")

console.log('xxxxxxxxxxxxxxxxxxxx')
