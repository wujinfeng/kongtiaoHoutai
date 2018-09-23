const router = require('koa-router')();
const admin = require('../controllers/admin');

// 登陆
router.get('/login', async (ctx) => {
    await new admin(ctx).login();
});

// 设置秘密
router.get('/setPassword', async (ctx) => {
    await new admin(ctx).setPassword();
});


module.exports = router;