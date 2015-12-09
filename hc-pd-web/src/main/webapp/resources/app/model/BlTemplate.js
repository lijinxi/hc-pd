/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-10 10:19:04
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.BlTemplate', {
    extend: 'Ext.data.Model',
    alias: 'model.bltemplate',
     fields: [
         {name: 'id', text: '模板编码', type: 'string'},
         {name: 'name', text: '模板名称', type: 'string'},
         ],
    idProperty: 'id',
    identifier: 'negative'
  });