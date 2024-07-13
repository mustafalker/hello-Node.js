const Logger = require('./logger');
const logger = new Logger();
// class MyClass{

// }
// module.exports= MyClass;

//listener kayıt et
logger.on('connection', function (args) {
          console.log('Bağlantı Kuruldu', args);
});

//event'i tetikle
logger.emit('connection', { id: 1, message: 'Hello' });

logger.log('Mustafa Ülker Login Oldu');