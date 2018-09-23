const AboutModel = require('../model/AboutModel');

class About {
    constructor(ctx) {
        this._ctx = ctx;
        this.aboutModel = new AboutModel()
    }

    // 用户提交的信息 
    async list() {
        let body = this._ctx.request.body;
        let page = body.page || 1;
        let pagesize = body.pagesize || 10;
        let params = {};

        let result = await this.aboutModel.list(params, page, pagesize);
        this._ctx.body = {
            code: 200,
            msg: 'ok',
            data: result
        };
    }

}

module.exports = About;