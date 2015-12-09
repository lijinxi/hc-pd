/**
 * Description: 本部工序工分表工序从表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.pdwrkactmaindtl',
    setCommonToobar:function(objlist) {
		if (!objlist || objlist.length < 1)return;
        objlist.btnSearch.setVisible(false);
        objlist.btnExport.setVisible(false);
        objlist.btnPrint.setVisible(true);
        objlist.btnOther.setVisible(false);
        objlist.btnSave.setVisible(false);
        
       /* objlist.btnAdd.setVisible(true);
        objlist.btnAdd.setText('增加物料');
        objlist.btnAdd.setDisabled(true);
        
        objlist.btnDelete.setText('删除物料/替代表');
        objlist.btnDelete.setVisible(true);
        objlist.btnDelete.setDisabled(true);*/
        objlist.btnPrint.setText('添加半产品');  
        objlist.btnPrint.setDisabled(false)
        
		objlist.btnOther1.setVisible(true);
		objlist.btnOther1.setText('上移');
		objlist.btnOther1.setDisabled(false);
		
		objlist.btnOther2.setVisible(true);
		objlist.btnOther2.setText('下移');
		objlist.btnOther2.setDisabled(false);
		
		objlist.btnOther3.setVisible(true);
		objlist.btnOther3.setText('工序选择');
		objlist.btnOther3.setDisabled(false);
		
		objlist.btnOther4.setVisible(true);
		objlist.btnOther4.setText('复制');
		objlist.btnOther4.setDisabled(false);

		objlist.btnOther5.setVisible(true);
		objlist.btnOther5.setText('工序移动');
		objlist.btnOther5.setDisabled(false);
			
        for (var i = 3; i < 7; i ++) {
            var sp = objlist['commontoolsp'+i];
            if (sp) {
                sp.setVisible(false);
            }
        }
    },
    //行选择
    gridSelectionChange:function (sender, e){
    	this.callParent(arguments);
    	var objs = this.getObjList();
    	var status = objs.commonbill.store.getAt(0).get('billStatus');
    	if (status>=40){
    		objs.btnPrint.setDisabled(true);
    	}
    },
    
    //上移
    onBtnOther1:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		
		var record=records[0];
		var lineId=record.get("lineId");
		var curIndex= store.findExact("lineId", lineId);//当前行索引
		var preIndex=curIndex-1;//上一行索引
		if(curIndex==0){//第一行数据
			return;
		}
		var preRecord=store.getAt(preIndex);//获取上一行数据
		me.onDataMove(me, record, preRecord);
    },
    //下移
    onBtnOther2:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		
		var record=records[0];
		var lineId=record.get("lineId");		
		var curIndex= store.findExact("lineId", lineId);//当前行索引
		var preIndex=curIndex+1;//下一行索引
		
		if(curIndex + 1 >=datas.length){//最后一行数据
			return;
		}
		
		var nextRecord=store.getAt(preIndex);//获取上一行数据
		me.onDataMove(me,record,nextRecord);		
    },
    //工序移动
    onBtnOther5:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        
        var objGrid = me.workObject;
        if(objGrid.viewModelKey!='mastergrid'){
        	return;
        }
        
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();//获取选中行
		var datas=store.getData();
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }  
        var record=records[0];
        var workProcessCode=record.get("workProcessCode");
        var orderNo=record.get("orderNo");
        var win=Ext.create('Ext.window.Window', {
            title: '请输入要移动的目标序号:',
            height: 150,
            width: 400,
            layout: 'form',
            modal:true,
            resizable:false,
            items:[{
                xtype:'form',
                layout: {
                	type: 'column',
                	columns:1
                },
                items:[{
                	columnWidth:1,
                	xtype: 'label',
                	text: "请输入工序编码为["+workProcessCode+"]序号为["+orderNo+"]的目标序号:"
                },{
                	columnWidth:0.98,
                	xtype : 'textfield',
                	hideLabel: true,
                	id:"orderNo",
                	name:"orderNo",
                	reference: 'orderNo',
                	allowBlank:false
                }],
            }],
            buttons:[{
                text : '确定',  
                handler : function(btn){
                    if(!(btn.up('window').down('form').isValid())) return;
                    var orderNo=btn.up('window').down('form').getComponent("orderNo").getValue();
                    me.onMoveOrderNo(orderNo,me,win);
                }
            },{
                text : '取消',
                handler : function(){  
                    win.close();  
                }
            }],
            listeners: {
                show: function (me,eOpts ) {
                }
            }
        });
		win.show();
    },
    //工序移动方法
    onMoveOrderNo:function(orderNo,me,win){
    	var me=this;
    	var objs = me.getObjList();
        if (!objs) return;
        
        var objGrid = me.workObject;
        if(objGrid.viewModelKey!='mastergrid'){
        	return;
        }
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();//获取选中行
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		var record=records[0];
		var curOrderNo=record.get("orderNo");
		var toOrderNo=parseInt(orderNo);
		var curIndex= store.findExact("orderNo", curOrderNo);//当前行索引
		var toIndex= store.findExact("orderNo", toOrderNo);//目标行索引
		if(toIndex<0){
			Hc.alert("没有找到对应序号的数据,请输入正确的序号");
			return;
		}
		var toRecord=store.getAt(toIndex);//获取目标行数据
		me.onDataMove(me,record,toRecord);		
    	win.close();
    },
    
    //上移、下移、移动公共方法
    onDataMove:function(me,record,toRecord){
    	//获取当前行数据
		var curWorkProcessCode=record.get("workProcessCode");
		var curWorkProcessName=record.get("workProcessName");
		var curDescription=record.get("description");
		var curWorkValue=record.get("workValue");
		var curWorkGroupCode=record.get("workGroupCode");
		var curUnitNo=record.get("unitNo");
		var curOrderNo=record.get("orderNo");
		var curStandard=record.get("standard");
		var curFuncRelation=record.get("funcRelation");
		var curAliasName=record.get("aliasName");
		
		//获取目标行数据	
		var toWorkProcessCode=toRecord.get("workProcessCode");
		var toWorkProcessName=toRecord.get("workProcessName");
		var toDescription=toRecord.get("description");
		var toWorkValue=toRecord.get("workValue");
		var toWorkGroupCode=toRecord.get("workGroupCode");
		var toUnitNo=toRecord.get("unitNo");
		var toOrderNo=toRecord.get("orderNo");
		var toStandard=toRecord.get("standard");
		var toFuncRelation=toRecord.get("funcRelation");
		var toAliasName=toRecord.get("aliasName");
		
		//互换
		record.set("workProcessCode",toWorkProcessCode);
		toRecord.set("workProcessCode",curWorkProcessCode);
		
		record.set("workProcessName",toWorkProcessName);
		toRecord.set("workProcessName",curWorkProcessName);
				
		record.set("description",toDescription);
		toRecord.set("description",curDescription);
		
		record.set("workValue",toWorkValue);
		toRecord.set("workValue",curWorkValue);
		
		record.set("workGroupCode",toWorkGroupCode);
		toRecord.set("workGroupCode",curWorkGroupCode);
		
		record.set("unitNo",toUnitNo);
		toRecord.set("unitNo",curUnitNo);
		
		record.set("standard",toStandard);
		toRecord.set("standard",curStandard);
		
		record.set("funcRelation",toFuncRelation);
		toRecord.set("funcRelation",curFuncRelation);
		
		record.set("aliasName",toAliasName);
		toRecord.set("aliasName",curAliasName);
		
		//事业部工序工分-转移作业组
		if(!record.get("toWorkGroupCode")){
			record.set("toWorkGroupCode",record.get("toWorkGroupCode"));
			toRecord.set("toWorkGroupCode",toRecord.get("toWorkGroupCode"));	
		}
    },
    
    //复制
    onBtnOther4:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var datas=store.getData();
		if(datas.length>0){
			Hc.alert("请删除原有工序并保存后在再行复制");
			return;
		}
    	me.showWorkProcessChooseDialog('copy');
    },

	 //添加半成品
    onBtnPrintClick: function (btn) {
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var datas=store.getData();
		if(datas.length>0){
			/*Hc.alert("请删除原有工序并保存后在再行复制");
			return;*/
		}
    	me.showWorkProcessChooseDialog('addMaterial');
    },
    
    /*工序选择*/
    onBtnOther3: function (btn) {
    	var me = this;
    	if (!(me.getObj('commonbill').isValid())) return;
    	me.showWorkProcessChooseDialog('select');
    },
    
    showWorkProcessChooseDialog:function(type){
  	  var me = this;
  	  //工序选择
  	  if(type=='select'){
  	  var dtl = {
  	          xtype: 'pdworkprocesschoose',
  	          userRight: me.view.userRight,
  	          moduleRight: me.view.moduleRight,
  	          userCode: me.view.userCode,
  	          userName: me.view.userName
  	      };
	  	 dtl.width = Ext.getBody().getWidth() * 0.8;
	     dtl.height = Ext.getBody().getHeight() * 0.8;
	     me.showInWin(dtl, {winName: 'pdworkprocesschoose', title: '工序选择', showBbar: true});
  	  }
  	  //复制
  	  if(type=='copy'){
  		var dtl = {
                xtype: 'pdwrkactmaindialog',
                userRight: me.view.userRight,
                moduleRight: me.view.moduleRight,
                userCode: me.view.userCode,
                userName: me.view.userName
            };
  		dtl.width = Ext.getBody().getWidth() * 0.8;
        dtl.height = Ext.getBody().getHeight() * 0.8;
        me.showInWin(dtl, {winName: 'pdwrkactmaindialog', title: '复制', showBbar: true});
  	  } 
  	  //添加半成品
  	  if(type=='addMaterial'){
  		var dtl = {
                xtype: 'pdwrkactmainrel',
                userRight: me.view.userRight,
                moduleRight: me.view.moduleRight,
                userCode: me.view.userCode,
                userName: me.view.userName
            };
  		dtl.width = Ext.getBody().getWidth() * 0.8;
        dtl.height = Ext.getBody().getHeight() * 0.8;
        me.showInWin(dtl, {winName: 'pdwrkactmainrel', title: '添加半成品', showBbar: true});
  	  } 
    },
    
    /**弹出框中的确认按钮事件*/
    onWinConfirmClick: function (btn) {
  	  var me=this;		
  	  var objlist = me.getObjList();
  	  
  	  var win = btn.up('window');
  	  var form = win.down('form');
  	  var val = form.getValues();
  	  if(!form.isValid()) return;
  	  if(win.winName=="pdworkprocesschoose"){
  		  
	  	  me.workObject=objlist['mastergrid'];  	  
	  	  var gridStore=me.workObject.getStore();
	  	  var gridStoreCount=gridStore.count();
	  	    	  
	  	  var chooseGrid1Store= Ext.getCmp("workProcessChooseGrid1").getStore();
	  	  
	  	  for(var i =0;i<chooseGrid1Store.getCount();i++){
	  		var model = gridStore.getModel();
	
	  		var item = chooseGrid1Store.getAt(i);
	  		var startRowIndex=gridStoreCount;
	        var newObj = model.create({_flag: 'A'});
	        newObj.set('billNo', me.view.billNo);
	        if (me.workObject.hasOrderNo) {
	            var ds = me.workObject.store;
	            var orderNo = (ds.max('orderNo') || 0) + 1;
	            newObj.set('orderNo', orderNo);
	        }        
	  		newObj.set('workProcessCode', item.get('workProcessCode'));
	  		newObj.set('workProcessName', item.get('workProcessName'));
	  		newObj.set('description', item.get('description'));
	  		newObj.set('workValue', item.get('workValue'));
	  		newObj.set('workGroupCode', item.get('workGroupCode'));
	  		newObj.set('unitNo', item.get('units'));
	  		newObj.set('standard', item.get('workValue'));
	  		gridStore.add(newObj);
		    me.workObject.getSelectionModel().select(gridStoreCount);
	  	  
	  		gridStoreCount=gridStoreCount+1;
	  	  }
	  	btn.up('window').close();
	  }
  	if(win.winName=="pdwrkactmaindialog"){
  		var dialogGrids= Ext.getCmp("PdWrkactMainDialogGrid").getSelection();
  		if(dialogGrids.length>1) return;
	  	var dailogGrid=dialogGrids[0];
	  	var wrkactNo=dailogGrid.get('wrkactNo');
	  	me.workObject=objlist['mastergrid'];
	  	Ext.Ajax.request({            
		     url:  Hc.pdsPath + 'pd_wrkact_main/getDtlRel.json',    //请求地址    
		     //提交参数组
		     params: {       
		    	 wrkactNo:wrkactNo             
		     }, 
		     //成功时回调       
		     success: function(response, options) {   
		        //获取响应的字符串
		    	var result = JSON.parse(response.responseText);
				var storedtl = objlist['mastergrid'].store;
				var storerel=objlist.grid1.store;
				
		    	Ext.each(result.listdtl,function(record){ 
		    		var model = storedtl.getModel();
			        var newObj = model.create({_flag: 'A'});
			        newObj.set('workProcessCode', record.workProcessCode);
			        newObj.set('workProcessName', record.workProcessName);
			        newObj.set('description', record.description);
			        newObj.set('workValue', record.workValue);
			        newObj.set('orderNo', record.orderNo);
			        newObj.set('workGroupCode', record.workGroupCode);
			        newObj.set('unitNo', record.unitNo);
			        newObj.set('standard', record.standard);
			        newObj.set('funcRelation', record.funcRelation);
			        newObj.set('aliasName', record.aliasName);
			  		storedtl.add(newObj);
		    	}); 
		    	
		    	Ext.each(result.listrel,function(record){ 
		    		var model = storerel.getModel();
			        var newObj = model.create({_flag: 'A'});
			        newObj.set('materialNo', record.materialNo);
			        storerel.add(newObj);
		    	}); 
		    	
		    	btn.up('window').close();
		    }
		});
  	}
  	
  	if(win.winName=="pdwrkactmainrel"){
  		me.workObject=objlist['grid1'];  	  
  		var gridStore=me.workObject.getStore();
  		var gridStoreCount=gridStore.count();
  		var records= Ext.getCmp("PdWrkactMainRelGrid").getSelection();
  		if(records.length<=0) return;
  		var styleNo='';//款号
  		var modelNo='';//型体
  		for(var i =0;i<records.length;i++){
  			if(i==0){
  				styleNo=records[i].get('styleNo');
  				modelNo=records[i].get('modelNo');
  			}
  			else{
  				if(records[i].get('styleNo')!=styleNo||records[i].get('modelNo')){
  					Hc.alert('请选择相同款号、型体的物料');
  					return;
  				}
  				else{
  					styleNo=records[i].get('styleNo');
  	  				modelNo=records[i].get('modelNo');
  				}
  			}
  		}
  		for(var i =0;i<records.length;i++){
  			var model = gridStore.getModel();
  			var startRowIndex=gridStoreCount;
  			var newObj = model.create({_flag: 'A'});
  			newObj.set('billNo', me.view.billNo);		
  			newObj.set('wrkactNo', records[i].get('wrkactNo'));
  			newObj.set('materialNo', records[i].get('materialNo'));
  			newObj.set('styleNo', records[i].get('styleNo'));
  			newObj.set('modelNo', records[i].get('modelNo'));

  			gridStore.add(newObj);
  			me.workObject.getSelectionModel().select(gridStoreCount); 	  
  			gridStoreCount=gridStoreCount+1;
  		}
  		btn.up('window').close();
  	}  
  	  //me.callParent(arguments);
    },
    
    //编码带出名称
    checkKeyValue:function(e){
    	//onGridAfterEdit: function (editor, e) {
    	 var me = this;
		 me.callParent(arguments);
		 var record = e.record;
		 if(e.field='workProcessCode'){
			 var workProcessCode=record.get('workProcessCode');
			 if(e.value != e.originalValue){
			   Hc.callServer({
				   url: Hc.pdsPath+'pd_work_process/list.json',
				   params: {
					   'workProcessCode':workProcessCode
				   },
				   success: function(response) {
					   var ob = Ext.decode(response.responseText);
					   var length=ob.list.length;
					   if(length>0){
						   var workProcessName=ob.list[0].workProcessName;
						   var workCateCode=ob.list[0].workCateCode;
						   var units=ob.list[0].units;
						   var workValue=ob.list[0].workValue;
						   var description=ob.list[0].description;
						   if(workProcessName)
						   {
							   record.set('workProcessName',workProcessName);
							   record.set('workCateCode',workCateCode);
							   record.set('units',units);
							   record.set('workValue',workValue);
							   record.set('description',description);
						   }
					   }
					   else{
						   record.set('workProcessName','');
						   record.set('workCateCode','');
						   record.set('description','');
					   }
				   }
			   }
			   )
			 }
		   }
		 
		 if(e.field='materialNo'){
			 var materialNo=record.get('materialNo');
			 var grid=me.workObject;
			 var datas=grid.store.getData();
			 if(e.value != e.originalValue){
				 Hc.callServer({
					 url: Hc.mdmPath + 'bas_material/list.json',
					 params: {
						 'materialNo':materialNo
					 },
					 success: function(response) {
						 var ob = Ext.decode(response.responseText);
						 var length=ob.list.length;
						 if(length>0){
							 var materialName=ob.list[0].materialName;
							 var styleNo=ob.list[0].styleNo;
							 var modelNo=ob.list[0].modelNo;
							 if(materialName)
							 {
								 for(var i=0;i<datas.length;i++){
									 
								 }
								 record.set('materialName',materialName);
								 record.set('styleNo',styleNo);
								 record.set('modelNo',modelNo);
							 }
						 }
						 else{
							 record.set('materialNo', '');
							 record.set('materialName','');
							 record.set('styleNo','');
							 record.set('modelNo','');
						 }
					 }
				 }
				 )
			 }
		 }
    },
    //保存前
    beforeSave: function (data) {
    	this.callParent(arguments);
    	var me = this;
    	if(me.lookupReference('modelNo')){
	    	var objlist= me.getObjList();
	    	me.workObject=objlist['grid1'];
		  	var gridStore=me.workObject.store;
		  	var records=gridStore.getData();
		  	var styleNo=null;//款号
	  		var modelNo=null;//型体
		  	if(records.length>0){
		  		for(var i=0;i<records.length;i++){
		  			if(i==0){
		  				styleNo=records.items[i].get('styleNo');
		  				modelNo=records.items[i].get('modelNo');
		  			}
		  			else{
		  				if(records.items[i].get('styleNo')!=styleNo||records.items[i].get('modelNo')){
		  					Hc.alert('存在不相同款号、型体的物料，请重新编辑');
		  					return false;
		  				}
		  				else{
		  					styleNo=records.items[i].get('styleNo');
		  	  				modelNo=records.items[i].get('modelNo');
		  				}
		  			}		  			
		  		}
		  		var styleNo=records.items[0].get('styleNo');
		  		var modelNo=records.items[0].get('modelNo');
		  		me.lookupReference('modelNo').setValue(modelNo);
		  	}
    	}
    	return true;
    },
    setStatusText: function (record) {
        this.callParent(arguments);
        var me=this;
        var objs = me.getObjList();
        
	    var status = record.get('billStatus');
	    if (status==40){
	    	objs.btnBillAudit.setText("反审核");
	    	objs.btnBillAudit.setVisible(true);
	    	objs.btnBillAudit.setDisabled(false);
	    	objs.btnOther1.setDisabled(true);
	    	objs.btnOther2.setDisabled(true);
	    	objs.btnOther3.setDisabled(true);
	    	objs.btnOther4.setDisabled(true);
	    	objs.btnOther5.setDisabled(true);
	    	objs.btnPrint.setDisabled(true);
	    	objs.btnAdd.setDisabled(true);
	    }else if(status<40){
	    	objs.btnBillAudit.setText("审核");
	    	objs.btnOther1.setDisabled(false);
	    	objs.btnOther2.setDisabled(false);
	    	objs.btnOther3.setDisabled(false);
	    	objs.btnOther4.setDisabled(false);
	    	objs.btnOther5.setDisabled(false);
	    	objs.btnPrint.setDisabled(false);
	    	objs.btnAdd.setDisabled(false);
	    }else{
	    	objs.btnBillAudit.setText("释放");
	    	objs.btnOther1.setDisabled(true);
	    	objs.btnOther2.setDisabled(true);
	    	objs.btnOther3.setDisabled(true);
	    	objs.btnOther4.setDisabled(true);
	    	objs.btnOther5.setDisabled(true);
	    	objs.btnPrint.setDisabled(true);
	    	objs.btnAdd.setDisabled(true);
	    }	    
    },
  });