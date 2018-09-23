const router = require('koa-router')();
const about = require('../controllers/about');


// 提交信息 
router.post('/api/message/list', async (ctx) => {
    await new about(ctx).list();
});



module.exports = router;