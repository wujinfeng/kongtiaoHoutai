const path = require('path');
module.exports = {
    port: 3000,
    ejs: {
        cache: false,
        debug: true
    },
    logDir: './logs/',
    secret: 'r4shhhhhsdharfed-secret',
    mysqlService1: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: '1234',
        database: '',
    },
    baseDb: 'kongtiao',
    db: {
        'kongtiao': 'mysqlService1'
    },
    upload:{
        url:'http://127.0.0.1:3000/',
        dir: path.join(__dirname, '../public/upload/'),
        prefix:'upload/'
    }

};
