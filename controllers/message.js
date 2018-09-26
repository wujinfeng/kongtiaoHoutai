const MessageModel = require('../model/MessageModel');

class Message {
    constructor(ctx) {
        this._ctx = ctx;
        this.messageModel = new MessageModel()
    }

    // 列表
    async list() {
        let result = await this.messageModel.list();
        console.log(result)
        this._ctx.body = {
            code: 200,
            msg: 'ok',
            data: result
        };
    }

    // 删除
    async delete() {
        let id = this._ctx.params.id;
        let result = await this.messageModel.delete(id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }

}

module.exports = Message;
