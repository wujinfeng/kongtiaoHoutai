const jwt = require("jsonwebtoken");
const config = require('../config/index');
const AdminModel = require('../model/AdminModel');
const util = require('../utils/util');
class Admin {
    constructor(ctx) {
        this._ctx = ctx;
        this.adminModel = new AdminModel()
    }

    // 登陆
    async login() {
        let body = this._ctx.request.body;
        let username = body.username ? body.username.trim() : '';
        let password = body.password ? body.password.trim() : '';
        if (!username || !password) {
            return this._ctx.body = {
                code: 400,
                msg: '请填写用户名和密码！'
            };
        }
        password = util.md5(util.md5(password));
        let params = {
            username,
            password
        }
        let result = await this.adminModel.login(params);
        if (result.length > 0) {
            const token = jwt.sign({
                username: result[0].username,
                id: result[0].id
            }, config.secret);
            ctx.headers.authorization = "Bearer " + token;
            this._ctx.body = {
                code: 200,
                msg: 'ok'
            };
        } else {
            this._ctx.body = {
                code: 400,
                msg: '请输入正确的用户名和秘密'
            };
        }

    }
    // 设置秘密
    async setPassword() {
        let body = this._ctx.request.body;
        let id = ctx.state.user.id;
        let password = body.password ? body.password.trim() : '';
        if (!id || !password) {
            return this._ctx.body = {
                code: 400,
                msg: '请填写密码！'
            };
        }
        password = util.md5(util.md5(password));
        let params = {
            id,
            password
        }
        let result = await this.adminModel.setPassword(params);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }



}

module.exports = Admin;