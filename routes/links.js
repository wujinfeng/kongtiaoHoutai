const router = require('koa-router')();
const links = require('../controllers/links');

// 列表
router.get('/api/links/list', async (ctx) => {
    await new links(ctx).list();
});

// 保存
router.post('/api/links/add', async (ctx) => {
    await new links(ctx).add();
});

// 编辑保存
router.post('/api/links/edit', async (ctx) => {
    await new links(ctx).editSave();
});

// 删除
router.post('/api/links/delete', async (ctx) => {
    await new links(ctx).delete();
});


module.exports = router;