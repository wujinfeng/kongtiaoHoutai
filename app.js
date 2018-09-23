const config = require('./config/index');
const stripAnsi = require('strip-ansi');
const koa = require('koa');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const compress = require('koa-compress');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const favicon = require('koa-favicon');
const onerror = require('koa-onerror');
const log = require('./utils/log');
const allRoutes = require('./routes/index');

const app = new koa();
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger((str, args) => {
    args[0] = stripAnsi(args[0]);
    log.info(args.join(','));
}));
app.use(helmet());
app.use(compress());
app.use(koaStatic(__dirname + '/public'));

app.use(koaBody());

allRoutes(app);

app.on('error', (err) => {
    log.error(JSON.stringify(err));
});

onerror(app);

/* istanbul ignore next */
if (!module.parent) {
    app.listen(config.port, function () {
        log.info(`Listening on http://localhost:${config.port}`);
    });
}


module.exports = app;
