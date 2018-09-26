/**
 * 品牌链接
 */

const BaseModel = require('./BaseModel');

class BrandModel extends BaseModel {

    /**
     * 列表
     */
    list(params) {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'brand order by ctime desc';
        let sqlParam = self.getExecParamByOption(sql, '');
        return self.execSql(sqlParam);
    }

    /**
     * 添加
     */
    add(params) {
        let self = this;
        let sql = 'insert into ' + self.baseDb + 'brand set ?';
        let sqlParam = self.getExecParamByOption(sql, params);
        return self.execSql(sqlParam);
    }
    /**
     * 编辑保存
     */
    editSave(params, id) {
        let self = this;
        let sql = 'update ' + self.baseDb + 'brand set  ? where id=?';
        let sqlParam = self.getExecParamByOption(sql, [params, id]);
        return self.execSql(sqlParam);
    }

    // 删除
    delete(id) {
        let self = this;
        let sql = 'delete from ' + self.baseDb + 'brand where id=?';
        let sqlParam = self.getExecParamByOption(sql, id);
        return self.execSql(sqlParam);
    }

}

module.exports = BrandModel;
