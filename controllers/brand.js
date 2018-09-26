const brandModel = require('../model/brandModel');

class Brand {
    constructor(ctx) {
        this._ctx = ctx;
        this.brand = new brandModel()
    }

    // 列表
    async list() {
        let body = this._ctx.request.body;
        let params = {};
        let result = await this.brand.list(params);
        this._ctx.body = {
            code: 200,
            msg: 'ok',
            data: result
        };
    }

    // 新加保存
    async add() {
        let body = this._ctx.request.body;
        let params = data(body);
        await this.brand.add(params);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
   /**
     * 编辑保存
     */
    async editSave() {
        let body = this._ctx.request.body;
        let params = data(body);
        let id = body.id;
        await this.brand.editSave(params, id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
    // 删除
    async delete() {
        let id = this._ctx.params.id;
        if (!id) {
            return this._ctx.body = {
                code: 200,
                msg: 'error'
            };
        }
        await this.brand.delete(id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
}

function data(body) {
    let data = {
        name: body.name || '',
        link: body.link || '',
        pic: body.pic || ''
    };
    return data;
}


module.exports = Brand;
