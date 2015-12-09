/**
 * Description: 本部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmain.PdWrkactMainController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.pdwrkactmain',
    init:function(){
        var me = this;
        me.callParent(arguments);
        var grid = me.getObjList().mastergrid;
        var columns = grid.columns;
        Ext.Array.each(columns,function(column){
                if(column.dataIndex == 'billNo')
                        column.text = '工分表编号';
                if(column.dataIndex == 'billStatus')
                		column.text = '工分表状态';
        })
  /*      var commonsearch = me.lookupReference('commonsearch');
        var items = commonsearch.items;
        Ext.Array.each(items,function(item){
                if(item.fieldLabel == 'billNo')
                        item.name = '不叫单据编号'；
        });*/
    }
    /*gridSelectionChange:function (sender, e){
    	 var me= this;
    	 var form = me.getObj('commonsearch');
    	 var commonsearch = me.lookupReference('commonsearch');
         var items = commonsearch.items;
         Ext.Array.each(items,function(item){
                 if(item.fieldLabel == 'billNo'){
                	 item.name = '不叫单据编号';
                 }
                         
         })
    }*/
  });