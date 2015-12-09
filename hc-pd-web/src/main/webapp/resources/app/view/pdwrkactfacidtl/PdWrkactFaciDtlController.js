/**
 * Description: 事业部工序工分表工序从表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtlController', {
    extend: 'Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlController',
    alias: 'controller.pdwrkactfacidtl',
    oldWorkProcessCode: '',
    oldMaterialNo:'',
    init:function()
    {
    	var me=this;
    	me.callParent();
    	//上面按钮控制
        var its = me.lookupReference('billtoolbar').items;
        for(var i=0;i<its.length;i++){
                var it = its.getAt(i);
                it.setVisible(it.itemId=='btnBillPrev'||it.itemId=='btnBillNext'||
                			  it.itemId=='btnBillSave'||it.itemId=='btnBillAudit'||
                			  it.itemId=='btnBillBack');
        }    	
        //中间按钮控制
        var items = me.lookupReference('commontoolbar').items;
        for(var i=0;i<items.length;i++){
                var item = items.getAt(i);
            item.setVisible(item.itemId=='btnOther1'||item.itemId=='btnOther2'||
            				item.itemId=='btnCancel');
        }
        
    },
    
    setStatusText: function (record) {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        var status = record.get('billStatus');
        if(status===5){
        	objList.btnBillAudit.setText('释放');
        	objList.btnBillAudit.setDisabled(false);
        }
        else if(status===45){
        	objList.btnBillAudit.setText('取消释放');
        	objList.btnBillAudit.setDisabled(false);
        }
        else if(status===50){
        	objList.btnBillAudit.setText('待引用');
        	objList.btnBillAudit.setDisabled(true);
        }
        else{
        	objList.btnBillAudit.setText('已引用');
        	objList.btnBillAudit.setDisabled(true);
        }
    },
    
    /*上单*/
    onBtnBillPrevClick: function (btn) {
        var me = this;
        me.getWorkGroupStore();
        me.callParent(arguments);
    },

    /*下单*/
    onBtnBillNextClick: function (btn) {
        var me = this;
        me.getWorkGroupStore();
        me.callParent(arguments);
    },
    /*重新装载(转移)作业组下拉框数据源*/
    getWorkGroupStore: function(){
    	var me = this,
    	objs = me.getObjList();
    	var columns=me.getObjList().mastergrid.columns;
    	Ext.each(columns,function(column){
    		if(column.dataIndex==='workGroupCode'||
    		   column.dataIndex==='toWorkGroupCode'){
    			var store=column.getEditor().store;
    			delete store.proxy.extraParams['workGroupType'];
    			store.load();
    		}
    		});
    },
    
    /*通过当前物料小类联动(转移)作业组*/
    onGridBeforeEdit: function (sender, e) {
    	if (this.gridCannotEditKeyField(e) === false) return false;
    	if(e.field == 'toWorkGroupCode'||e.field == 'workGroupCode') {
        	var me=this,
        	record = e.record,
        	objList = me.getObjList(),
        	store=e.column.getEditor().store;
    		var newWrkactType=me.lookupReference('wrkactType').getValue();
    		var oldWrkactType= store.proxy.extraParams['workGroupType'];
    		if(newWrkactType!=oldWrkactType){
        		var cellValue=record.get(e.field);
            	store.proxy.extraParams.workGroupType=newWrkactType;
    			store.on("load", function() {
    				e.column.getEditor().setValue(cellValue);
    				});        	
            	store.load();
    		}
       }  
    }
  });