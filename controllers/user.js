const UserModel = require('../model/UserModel');
const config = require('../config/index');

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

    upload() {
        let files = this._ctx.request.files;
        let path = files.image.path;
        let name = path.slice(path.lastIndexOf('upload_'));
        let url = config.upload.url + config.upload.prefix + name;
        this._ctx.body = {
            code: 200,
            msg: '',
            data: {relativeDir: url}
        };
    }


}

module.exports = User;
