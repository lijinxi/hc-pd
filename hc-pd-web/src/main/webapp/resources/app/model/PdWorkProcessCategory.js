/**
 * Description:  工序类别表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:48:23
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkProcessCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkprocesscategory',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workCateCode', text: '工序类别编码', type: 'string'},
         {name: 'workCateName', text: '工序类别名称', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });