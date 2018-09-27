const AirModel = require('../model/AirModel');

class Air {
    constructor(ctx) {
        this._ctx = ctx;
        this.airModel = new AirModel()
    }

    // 列表
    async list() {
        let body = this._ctx.request.query; console.log(body)
        let page = Number(body.currentPage || 1);
        let pagesize = Number(body.pageSize || 10);
        let title = body.title ? body.title.trim():'';
        let params = {};
        if(title){
            params.title = title
        }
        let result = await this.airModel.list(params, page, pagesize);
        this._ctx.body = {
            code: 200,
            msg: 'ok',
            data: result
        };
    }

    // 新加保存
    async add() {
        let body = this._ctx.request.body;
        let params = airData(body);
        await this.airModel.add(params);
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
        let params = airData(body);
        let id = body.id;
        await this.airModel.editSave(params, id);
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
        await this.airModel.delete(id);
        this._ctx.body = {
            code: 200,
            msg: 'ok'
        };
    }
}

function airData(body) {
    let data = {
        type: body.type,
        title: body.title || '',
        name: body.name || '',
        alias: body.alias || '',
        model: body.model || '',
        brand: body.brand || '',
        place: body.place || '',
        product: body.product || '',
        cooling_mode: body.cooling_mode || '',
        compressor: body.compressor || '',
        unit_category: body.unit_category || '',
        purpose: body.purpose || '',
        refrigerating_capacity: body.refrigerating_capacity || '',
        heat_production: body.heat_production || '',
        refrigeration_power: body.refrigeration_power || '',
        thermal_power: body.thermal_power || '',
        cop: body.cop || '',
        voltage_category: body.voltage_category || '',
        shape_size: body.shape_size || '',
        transport_weight: body.transport_weight || '',
        operating_weight: body.operating_weight || '',
        noise: body.noise || '',
        air_volume: body.air_volume || '',
        cooling_capacity: body.cooling_capacity || '',
        heat_supply: body.heat_supply || '',
        static_pressure: body.static_pressure || '',
        motor_power: body.motor_power || '',
        weight: body.weight || '',
        tubes_num: body.tubes_num || '',
        residual_pressure: body.residual_pressure || '',
        working_condition: body.working_condition || ''
    };
    return data;
}


module.exports = Air;
