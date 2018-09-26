const router = require('koa-router')();
const news = require('../controllers/news');

// 列表
router.get('/api/news/list', async (ctx) => {
    await new news(ctx).list();
});

// 保存
router.post('/api/news/add', async (ctx) => {
    await new news(ctx).add();
});

// 编辑保存
router.post('/api/news/edit', async (ctx) => {
    await new news(ctx).editSave();
});

// 删除
router.get('/api/news/delete/:id', async (ctx) => {
    await new news(ctx).delete();
});


module.exports = router;
