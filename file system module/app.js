const { log } = require('console');
const fs = require('fs');

// const files = fs.readdir('./', function (error, data) {

//           if (error) {
//                     console.log(error);
//           } else {
//                     console.log(data);
//           }

// });

// const data = fs.readFile('index.html', 'utf-8', function (error, data) {
//           if (error) {
//                     console.log(error);
//           } else {
//                     console.log(data);
//           }
// });

// fs.writeFile('deneme.txt','HelloWorld', function(error){
//           if (error) {
//                    console.log(error); 
//           }else{
//                     console.log('Doc was created');
//           }
// });
// //ekleme
// fs.appendFile('deneme.txt','HelloWorld', function(error){
//           if (error) {
//                    console.log(error); 
//           }else{
//                     console.log('Doc was created');
//           }
// });

// //silme
// fs.unlink('deneme.txt', function(error){
//           if (error) {
//                    console.log(error); 
//           }else{
//                     console.log('Doc was deleted');
//           }
// });

//yeniden isimlendirme
fs.rename('deneme.txt','deneme2.txt',function(error){
          console.log('Doc name was changed');
});