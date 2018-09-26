const router = require('koa-router')();
const user = require('../controllers/user');

// 列表
router.get('/api/user/list', async (ctx)=>{
    await new user(ctx).list();
});

// 上传图片
router.post('/api/user/upload', async (ctx)=> {
    await new user(ctx).upload();
});


module.exports = router;
