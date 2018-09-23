const UserModel = require('../model/UserModel');
const util = require('../utils/util');
const emailUtil = require('../utils/mail');

class User {
    constructor(ctx) {
        this._ctx = ctx;
        this.userModel = new UserModel();
    }

    // 列表
    async list() {
        let body = this._ctx.request.body;
        let page = body.page || 1;
        let pagesize = body.pagesize || 10;
        let params = {};

        let result = await this.userModel.list(params, page, pagesize);
        this._ctx.body = {
            code: 200,
            msg: 'ok',
            data: result
        };

    }


}

module.exports = User;