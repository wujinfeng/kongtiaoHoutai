const router = require('koa-router')();
const message = require('../controllers/message');


// 列表
router.get('/api/message/list', async (ctx) => {
    await new message(ctx).list();
});

// 删除
router.get('/api/message/delete/:id', async (ctx) => {
    await new message(ctx).delete();
});


module.exports = router;
