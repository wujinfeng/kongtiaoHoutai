const router = require('koa-router')();
const user = require('../controllers/user');

// 列表
router.get('/user/list', async (ctx)=>{
    await new user(ctx).list();
});

module.exports = router;