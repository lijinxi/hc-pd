/**
 * Description: 事业部工序工分表主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaci', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfaci',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'wrkactType', text: '工序工分表类别(取数据字典 workshop_type)', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'categoryNo', text: '鞋类(类别编号)', type: 'string'},
         {name: 'versionNo', text: '版本号', type: 'int'},
         {name: 'isoNo', text: '表号', type: 'string'},
         {name: 'billStatus', text: '状态', type: 'int'},
         {name: 'creator', text: '创建者', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改者', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });