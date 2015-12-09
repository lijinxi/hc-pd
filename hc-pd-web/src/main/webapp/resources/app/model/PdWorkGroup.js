/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:43:33
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkGroup', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkgroup',
     fields: [
        // {name: 'pdWorkGroup', text: ' 作业组表', type: 'BASE TABLE'},
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workGroupType', text: '作业组类别', type: 'string'},
         {name: 'workGroupCode', text: '作业组编码', type: 'string'},
         {name: 'workGroupName', text: '作业组名称', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });