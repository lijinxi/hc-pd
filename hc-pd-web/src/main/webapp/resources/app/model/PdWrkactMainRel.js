/**
 * Description: 本部工序工分表成品关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:17
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactMainRel', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactmainrel',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'materialNo', text: '对应成品编号', type: 'string'},
         {name: 'materialName', text: '对应成品名称', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         ]
  });