var firstName = 'Mustafa'
var lastName = 'ÜLKER'
var age = 25

//Bu şekilde global olarak veriyoruz.
module.exports.age = age;

//yada
module.exports = {
          name: firstName,
          surname:lastName
}