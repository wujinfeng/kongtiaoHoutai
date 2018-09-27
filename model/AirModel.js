/**
 * 空调
 */

const BaseModel = require('./BaseModel');

class AirModel extends BaseModel {

    /**
     * 列表
     */
    async list(params, page, pagesize) {
        let self = this;
        let con = '';
        if(params.title){
            con = 'where title like "%'+params.title+'%"';
        }
        let sql = 'select * from ' + self.baseDb + 'air '+ con +' order by ctime desc limit ?,?'; console.log(sql)
        let sqlCount = 'select count(*) as count from ' + self.baseDb + 'air '+ con;
        let sqlParam = self.getExecParamByOption(sql, [(page - 1) * pagesize, pagesize]);
        let sqlParamCount = self.getExecParamByOption(sqlCount, '');
        let list = await self.execSql(sqlParam);
        let count = await self.execSql(sqlParamCount);
        return {
            tableData:list,
            totalNum:count[0].count || 0
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
