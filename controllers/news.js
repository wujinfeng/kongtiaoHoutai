const NewsModel = require('../model/newsModel');

class News {
    constructor(ctx) {
        this._ctx = ctx;
        this.news = new NewsModel()
    }

    // 列表
    async list() {
        let body = this._ctx.request.body;
        let params = {};
        let result = await this.news.list(params);
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
        await this.news.add(params);
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
        await this.news.editSave(params, id);
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
        await this.news.delete(id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
}

function data(body) {
    let data = {
        name: body.name || '',
        pic: body.pic || '',
        link: body.link || '',
        content: body.content || ''
    };
    return data;
}


module.exports = News;
