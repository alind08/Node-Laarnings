// const http = require('http')
// const data = require('./data')

// function dataControl(req, res) {
//     res.writeHead(
//         200,
//         {
//             'Content-Type': 'application\json'
//         }
//     );
//     res.write(JSON.stringify(data));
//     res.end();
// }
// http.createServer(dataControl).listen(1351);


// console.log(process.argv);


// const colors = require('colors');
// const chalk = require('chalk');

// // var alind = 'Alind Sharma'
// const log = console.log

// log(chalk.white.bgCyan('Hello World Whats Up'));


// let a = 10;
// let b = 0;






// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(20);
//     }, 2000);
// });

// b = waitingData.then((data)=>{
//     b = data
//     console.log(a+b);
// });





// console.log('Starting up....');


// setTimeout(()=>{
//     console.log('2 second log');
// },2000)

// setTimeout(()=>{
//     console.log('0 second log');
// },0)


// console.log('Finishing up....');



// const express = require('express');

// const app = express();

// app.get('',(req,res)=>{
//     res.send(`
//     <h1>Hello,this is home page</h1>
//     <a href = '/about'> Go to about page</a>
//     `);
// })

// app.get('/about',(req,res)=>{
//     res.send(`
//     <input type = 'text' placeholder = 'UserName' value = '${req.query.name}'</input>
//     <button>Click to enter</button>
//     <a href = '/'> Go to home page</a>
//     `);
// })


// app.listen(5000);


// const express = require('express');
// const path = require('path')

// const app = express();

// const aboutPath = path.join(__dirname,"view/about")
// const homePath = path.join(__dirname,"view/home")

// app.set('view engine','ejs');

// app.use(express.static(aboutPath))
// app.use(express.static(homePath))

// app.get('',(_,res)=>{
//     res.sendFile(`${homePath}/home.html`);
// })

// app.get('/about',(_,res)=>{
//     res.sendFile(`${aboutPath}/about.html`);
// })

// app.get('/home',(_,res)=>{
//     res.sendFile(`${homePath}/home.html`);
// })

// app.get('/profile',(_,res)=>{
//     const user = {
//         name:'Alind Sharma',
//         email:'alind@test.com',
//         city:'Noida',
//         skills:['Flutter','Dart','js','Node','Git']
//     }
//     res.render('profile',{user});
// })

// app.get('*',(_,res)=>{
//     res.sendFile(`${homePath}/pageNotFound.html`);
// })

// app.listen(5000);