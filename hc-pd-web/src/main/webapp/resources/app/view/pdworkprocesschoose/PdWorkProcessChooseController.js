/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocesschoose.PdWorkProcessChooseController', {
    extend: 'Hc_pd.view.pdworkprocess.PdWorkProcessController',
    alias: 'controller.pdworkprocesschoose',
    init:function() {
		var me = this;
		me.callParent(arguments);
		
		//按钮控制
		var items = me.lookupReference('commontoolbar').items;
		for(var i=0;i<items.length;i++){
			var item = items.getAt(i);
	    	item.setVisible(item.itemId=='btnSearch'||item.itemId=='btnOther1');
	    	if(item.itemId=='btnOther1'){
	    		item.setText('刷新树');
	    		item.setGlyph(Hc.Icon.btnRefresh);
	    	}
		}
		//隐藏分页插件
		//me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
		//默认选中根节点
		var tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(tree.getRootNode());
	},
	
	//添加
	onBtnAddProcessClick: function (btn) {
		this.onBtnAddClick(null);
	},
	
	//移除
	onBtnRemoveProcessClick: function (btn) {
		this.onBtnDeleteClick(null);
	},
	
	onBtnAddClick: function (btn) {
		var me = this,
		objlist = me.getObjList();
		me.workObject=objlist['grid1'];
		me.callParent(arguments);
	},
	
	onBtnDeleteClick: function (btn) {
		var me = this,
		objlist = me.getObjList();
		me.workObject=objlist['grid1'];
		me.callParent(arguments);
	},
    
	initAddData: function (newObj) {
        var me = this,
        objlist = me.getObjList();

        //me.callParent(arguments);
    	var item = objlist['mastergrid'].getSelection()[0];
    	if(!item){
            Hc.alert("请先选择工序");
            return false;
    	}
        //newObj.set('processId', item.get('processId'));
        newObj.set('levelNo', item.get('levelNo'));
        newObj.set('workGroupCode', item.get('workGroupCode'));
        newObj.set('workCateCode', item.get('workCateCode'));
        newObj.set('workCateName', item.get('workCateName'));
        newObj.set('workProcessCode', item.get('workProcessCode'));
        newObj.set('workProcessName', item.get('workProcessName'));
        newObj.set('orderNo', item.get('orderNo'));
        newObj.set('workValue', item.get('workValue'));
        newObj.set('workProcessValue', item.get('workProcessValue'));
        newObj.set('categoryNo', item.get('categoryNo'));
        newObj.set('categoryName', item.get('categoryName'));
        newObj.set('isVirtual', item.get('isVirtual'));
        newObj.set('parentProcessId', item.get('parentProcessId'));
        newObj.set('units', item.get('units'));
        newObj.set('enableFlag', item.get('enableFlag'));
        newObj.set('description', item.get('description'));         
    },
    
    /*重写查询按钮*/
    onBtnSearchClick: function (btn) {
	    var me = this;
	    var tree = me.lookupReference('menutree');
	    var storeTree = tree.store;
   		delete storeTree.proxy.extraParams['processId'];
   		delete storeTree.proxy.extraParams['workProcessCode'];
   		delete storeTree.proxy.extraParams['workProcessName'];
   		
   		//如果重新刷新树的根节点则清空网格里的数据
   		var objs = me.getObjList();
		var storeGrid = objs.mastergrid.store;
		delete storeGrid.proxy.extraParams['processId'];
   		delete storeGrid.proxy.extraParams['workProcessCode'];
   		delete storeGrid.proxy.extraParams['workProcessName'];
    	
    	me.callParent(arguments);
    }
    
  });