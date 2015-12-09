/**
 * Description: 事业部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfaci.PdWrkactFaciController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.pdwrkactfaci',
    init:function()
    {
		var me = this,
        objList = me.getObjList();
    	me.callParent();
    	objList.btnAdd.setVisible(false);
    },
  });