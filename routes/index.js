const jwt = require("koa-jwt");
const config = ('../config/index');
const admin = require('./admin');
const user = require('./user');
const message = require('./message');
const air = require('./air');
const brand = require('./brand');
const links = require('./links');
const news = require('./news');

module.exports = (app) => {
    // app.use(jwt({
    //     secret: config.secret
    // }), async function (ctx) {
    //     console.log(ctx.state)
    //     if (!ctx.state.user) {
    //         return (ctx.status = 401);
    //     }
    //     ctx.status = 200;
    // });
    app.use(admin.routes()).use(admin.allowedMethods());
    app.use(user.routes()).use(user.allowedMethods());
    app.use(message.routes()).use(message.allowedMethods());
    app.use(air.routes()).use(air.allowedMethods());
    app.use(brand.routes()).use(brand.allowedMethods());
    app.use(links.routes()).use(links.allowedMethods());
    app.use(news.routes()).use(news.allowedMethods());
}
