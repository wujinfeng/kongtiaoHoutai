/**
 * 空调
 */

const BaseModel = require('./BaseModel');

class AirModel extends BaseModel {

    /**
     * 列表
     */
    list(params, page, pagesize) {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'air limit ?,?';
        let sqlCount = 'select count(*) as count from ' + self.baseDb + 'air';
        let sqlParam = self.getExecParamByOption(sql, [(page - 1) * pagesize, pagesize]);
        let sqlParamCount = self.getExecParamByOption(sqlCount, '');
        return {
            list: self.execSql(sqlParam),
            count: self.execSql(sqlParamCount)
        };
    }

    /**
     * 添加
     */
    add(params) {
        let self = this;
        let sql = 'insert into ' + self.baseDb + 'air set ?';
        let sqlParam = self.getExecParamByOption(sql, params);
        return self.execSql(sqlParam);
    }
    /**
     * 编辑保存
     */
    editSave(params, id) {
        let self = this;
        let sql = 'update ' + self.baseDb + 'air set  ? where id=?';
        let sqlParam = self.getExecParamByOption(sql, [params, id]);
        return self.execSql(sqlParam);
    }

    // 删除
    delete(id) {
        let self = this;
        let sql = 'delete from ' + self.baseDb + 'air where id=?';
        let sqlParam = self.getExecParamByOption(sql, id);
        return self.execSql(sqlParam);
    }

}

module.exports = AirModel;