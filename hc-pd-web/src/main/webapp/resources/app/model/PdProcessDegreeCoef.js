/**
 * Description:  工序等级系数表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:59
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdProcessDegreeCoef', {
    extend: 'Ext.data.Model',
    alias: 'model.pdprocessdegreecoef',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workProcessValue', text: '工序价值'},
         {name: 'workProcessCoef', text: '工序系数', type: 'float'},
         {name: 'workProcessDegree', text: '工序等级', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });