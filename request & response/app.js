const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

          // res.setHeader('Content-Type','text/plain');
          // res.setHeader('Content-Type', 'application/json');
          // res.statusCode = 200;
          // res.statusMessage = 'Ok';

          // res.write(JSON.stringify({
          //           name: 'Iphone 15', price: 50000

          // }));
          // res.end();

          fs.readFile('index.html', function (error, file) {
                    if (error) {
                              res.setHeader('Content-Type', 'text/plain');
                              res.statusCode = 400;
                              res.statusMessage = 'Bad Request';
                              res.write('Dosya Bulunamadı');
                              res.end();
                    } else {
                              res.setHeader('Content-Type', 'text/html');
                              res.statusCode = 200;
                              res.statusMessage = 'Ok';
                              res.end(file);
                    }
          });

});



server.listen(3000);

console.log('Listening port on 3000...');