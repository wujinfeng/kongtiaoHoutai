/**
 * 留言
 */

const BaseModel = require('./BaseModel');

class MessageModel extends BaseModel {

    /**
     * 列表
     */
    list() {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'message order by ctime desc';
        let sqlParam = self.getExecParamByOption(sql, ''); console.log(sqlParam)
        return self.execSql(sqlParam);
    }

    delete(id){
        let self = this;
        let sql = 'delete from ' + self.baseDb + 'message where id=?';
        let sqlParam = self.getExecParamByOption(sql, id);
        return self.execSql(sqlParam);
    }


}

module.exports = MessageModel;
