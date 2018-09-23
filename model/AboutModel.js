/**
 * 关于我们
 */

const BaseModel = require('./BaseModel');

class HomeModel extends BaseModel {

    /**
     * 列表
     */
    async list(params, page, pagesize) {
        let self = this;
        let sql = 'select * from ' + self.baseDb + 'message limit ?,?';
        let sqlCount = 'select count(*) as count from ' + self.baseDb + 'message';
        let sqlParam = self.getExecParamByOption(sql, [(page - 1) * pagesize, pagesize]);
        let sqlParamCount = self.getExecParamByOption(sqlCount, '');
        let list = await self.execSql(sqlParam);
        let count = await self.execSql(sqlParamCount);
        return {
            list,
            count
        };
    }


}

module.exports = HomeModel;