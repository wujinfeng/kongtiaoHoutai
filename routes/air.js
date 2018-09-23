const router = require('koa-router')();
const air = require('../controllers/air');

// 列表
router.get('/api/air/list', async (ctx) => {
    await new air(ctx).list();
});

// 保存
router.post('/api/air/add', async (ctx) => {
    await new air(ctx).add();
});

// 编辑保存
router.post('/api/air/edit', async (ctx) => {
    await new air(ctx).editSave();
});

// 删除
router.post('/api/air/delete', async (ctx) => {
    await new air(ctx).delete();
});

module.exports = router;