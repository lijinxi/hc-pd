/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkProcess', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkprocess',
     fields: [
         {name: 'processId', text: '工序ID', type: 'int'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'workValue', text: '标准工分定额', type: 'float'},
         {name: 'workGroupCode', text: '作业组', type: 'string'},
         {name: 'isVirtual', text: '是否为虚工序', type: 'int'},
         {name: 'parentProcessId', text: '父工序ID', type: 'int'},
         {name: 'units', text: '计算单位', type: 'int'},
         {name: 'categoryNo', text: '鞋类编号', type: 'string'},
         {name: 'categoryName', text: '鞋类名称', type: 'string'},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'workProcessValue', text: '工序价值', type: 'int'},
         {name: 'workCateCode', text: '工序类别编号', type: 'string'},
         {name: 'workCateName', text: '工序类别名称', type: 'string'},
         {name: 'levelNo', text: '等级', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'processId',
    identifier: 'negative'         
  });