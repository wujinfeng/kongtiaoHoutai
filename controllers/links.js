const LinksModel = require('../model/linksModel');

class Link {
    constructor(ctx) {
        this._ctx = ctx;
        this.linksModel = new LinksModel()
    }

    // 列表
    async list() {
        let body = this._ctx.request.body;
        let params = {};
        let result = await this.linksModel.list(params);
        console.log(result)
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
        await this.linksModel.add(params);
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
        await this.linksModel.editSave(params, id);
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
        await this.linksModel.delete(id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
}

function data(body) {
    let data = {
        name: body.name || '',
        link: body.link || ''
    };
    return data;
}


module.exports = Link;
