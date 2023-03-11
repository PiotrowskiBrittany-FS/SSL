const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('What is your name? ', name =>{
    console.log(`Welcome ${name}!`);
    readline.question('What is the assignment name? ', assignment =>{
        console.log(`${name} took ${assignment}`);
        readline.question(`What grade did you get in ${assignment}? `, grade =>{
            parseInt(grade)
            if(grade >= 90){
                console.log(`${name} got an A in ${assignment}`)
            }
            else if (grade >= 80 && grade <= 90){
                console.log(`${name} got a B in ${assignment}`)
            }
            else if (grade >= 70 && grade <= 80){
                console.log(`${name} got a C in ${assignment}`)
            }
            else if (grade >= 60 && grade <= 70){
                console.log(`${name} got a D in ${assignment}`)
            }
            else {
                console.log(`${name} got an F in ${assignment}`)
            }
            readline.close();
        })
    })
})
