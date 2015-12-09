/**
 * Description: 本部工序工分表工序从表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactMainDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactmaindtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},        
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'workValue', text: '工分值', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'workGroupCode', text: '作业组别', type: 'string'},
         {name: 'unitNo', text: '单位编号', type: 'string'},
         {name: 'standard', text: '标准工分定额', type: 'string'},
         {name: 'funcRelation', text: '函数关系', type: 'int'},
         {name: 'aliasName', text: '别名', type: 'string'}
         ]
  });