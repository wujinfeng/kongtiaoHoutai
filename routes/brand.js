const router = require('koa-router')();
const brand = require('../controllers/brand');

// 列表
router.get('/api/brand/list', async (ctx) => {
    await new brand(ctx).list();
});

// 保存
router.post('/api/brand/add', async (ctx) => {
    await new brand(ctx).add();
});

// 编辑保存
router.post('/api/brand/edit', async (ctx) => {
    await new brand(ctx).editSave();
});

// 删除
router.get('/api/brand/delete/:id', async (ctx) => {
    await new brand(ctx).delete();
});


module.exports = router;
