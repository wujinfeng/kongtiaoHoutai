/**
 * 管理员用户
 */

const BaseModel = require('./BaseModel');

class AdminModel extends BaseModel {

    // 登陆
    login(params) {
        let self = this;
        let sql = 'select id,username from ' + self.baseDb + 'admin where password=? and username=?';
        let sqlParam = self.getExecParamByOption(sql, [params.password, params.username])
        return self.execSql(sqlParam);
    }

    //设置秘密
    setPassword(params) {
        let self = this;
        let sql = 'update ' + self.baseDb + 'admin set password=? where id=?';
        let sqlParam = self.getExecParamByOption(sql, [params.password, params.id])
        return self.execSql(sqlParam);
    }

}

module.exports = AdminModel;
