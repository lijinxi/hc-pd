/**
 * Description: 事业部工序工分表工序从表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaciDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfacidtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         //{name: 'workGroupName', text: '作业组', type: 'string'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'description', text: '工序描述', type: 'string'},
         {name: 'workValue', text: '工分值', type: 'float'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'workGroupCode', text: '作业组别', type: 'string'},
         {name: 'unitNo', text: '单位', type: 'string'},
         {name: 'standard', text: '标准工分定额', type: 'string'},
         {name: 'funcRelation', text: '函数关系', type: 'int'},
         {name: 'aliasName', text: '别名', type: 'string'},
         {name: 'toWorkGroupCode', text: '转移作业组别', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'workProcessValue', text: '工序价值', type: 'string'}
         ]

  });