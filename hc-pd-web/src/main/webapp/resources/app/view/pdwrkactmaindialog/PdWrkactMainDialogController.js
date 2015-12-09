/**
 * Description: 本部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialogController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdwrkactmaindialog',
    init:function()
    {
    	var me=this;
    	me.callParent();
        //按钮控制
        var items = me.lookupReference('commontoolbar').items;
        for(var i=0;i<items.length;i++){
        	var item = items.getAt(i);
        	//item.setVisible(item.itemId=='btnOther1'||item.itemId=='btnOther2');
        	item.setVisible(item.itemId=='btnSearch');         	
        }
    }
  });