/**
 * 注册用户
 */

const BaseModel = require('./BaseModel');

class UserModel extends BaseModel {

    /**
     * 列表
     */
    list(params, page, pagesize) {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'user limit ?,?';
        let sqlCount = 'select count(*) as count from ' + self.baseDb + 'user';
        let sqlParam = self.getExecParamByOption(sql, [(page-1)*pagesize, pagesize]);
        let sqlParamCount = self.getExecParamByOption(sqlCount, '');
        let list = await self.execSql(sqlParam);
        let count = await self.execSql(sqlParamCount);
        return {
            list,
            count
        };
    }

}

module.exports = UserModel;