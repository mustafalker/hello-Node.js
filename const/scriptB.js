//Bu şekilde global module olarak diğer scriptA klasöründeki değişkenlere erişebiliriz.
const scriptA = require('./scriptA');

console.log(scriptA.age)

console.log(scriptA.name);