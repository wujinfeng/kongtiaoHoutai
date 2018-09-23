const nodemailer = require('nodemailer');

const defaultOptions = {
    host: 'smtp.163.com',
    secure: true,
    port: 465,
    user: 'wujinfeng_auto@163.com',
    pass: '',
    from: 'wujinfeng_auto@163.com',
    to: '923343669@qq.com',
    subject: '验证码',
    text: 'hello'
};

const sendEmail = function (options) {
    return new Promise(function (resolve, reject) {
        options = Object.assign(defaultOptions, options);
        let transporter = nodemailer.createTransport({
            host: options.host,
            secure: options.secure,
            port: options.port,
            auth: {
                user: options.user,
                pass: options.pass
            }
        });
        transporter.sendMail({
            from: options.from,
            to: options.to,
            subject: options.subject,
            text: options.text
        }, function (err) {
            if (err) {
                reject(err);
            } else {
                resolve()
            }
        });
    });
};

module.exports = {sendEmail}

// test
/* async function start() {
    try {
        let code = Math.random().toString().slice(-6);
        let opt = {};
        opt.text = '尊敬的用户，您的验证码是' + code;
        opt.to = '923343669@qq.com';
        await sendEmail(opt)
        console.log('ok')
    } catch (err) {
        console.log(err)
    }
}

start();

*/