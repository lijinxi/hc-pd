/**
 * Description: 事业部工序工分表成品关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaciRel', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfacirel',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'materialNo', text: '对应成品编号', type: 'string'},
         {name: 'materialName', text: '成品名称', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'}
         ]
  });