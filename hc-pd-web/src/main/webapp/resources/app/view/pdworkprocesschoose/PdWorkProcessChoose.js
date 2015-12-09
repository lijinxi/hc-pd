/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocesschoose.PdWorkProcessChoose', {
	extend: 'Hc_Common.view.BaseMultiPage',
	alias: 'widget.pdworkprocesschoose',
	requires: [
		'Hc_pd.model.PdWorkProcess',
		'Hc_pd.view.pdworkprocesschoose.PdWorkProcessChooseController',
		'Hc_pd.view.pdworkprocesschoose.PdWorkProcessChooseModel'
	],
	controller: 'pdworkprocesschoose',
	viewModel: {
		type: 'pdworkprocesschoose'
	},
	isAutoLoad : false,
	customLayout1 : true,	
	
    choosetoolbar: {
        xtype: 'toolbar',
        reference: 'choosetoolbar',
        region: 'north',
        items: [{
            text: '添加',
            itemId: 'btnAddProcess',
            reference: 'btnAddProcess',
            handler: 'onBtnAddProcessClick',
            glyph: Hc.Icon.btnAdd,
            canUse: true,
            disabled: false
        }, {
            text: '移除',
            itemId: 'btnRemoveProcess',
            reference: 'btnRemoveProcess',
            handler: 'onBtnRemoveProcessClick',
            glyph: Hc.Icon.btnDelete,
            canUse: true,
            disabled: false
        }]
    },
	
	initComponent: function () {
		var me= this;
		Ext.apply(me,
				{
					searchItems: [
									{xtype: 'textfield', fieldLabel: '工序编码', name: 'workProcessCode'},
									{xtype: 'textfield', fieldLabel: '工序名称', name: 'workProcessName'}
								 ],
					gridModel: 'Hc_pd.model.PdWorkProcess',
					gridColumns: [
						{xtype:'gridcolumn',dataIndex: 'processId', text: '工序ID',hidden:true,hideable:false},
						{xtype:'gridcolumn',dataIndex: 'levelNo', text: '等级',hidden:true,hideable:false},
						{dataIndex: 'workGroupCode', text: '作业组',
								xtype : 'bllookupedit',
								displayvalue : Hc.pdsPath + 'pd_work_group/listAll.json',
								displaymember : 'workGroupName',
								valuemember : 'workGroupCode',
								readOnly:true
						},
						{dataIndex: 'workCateCode', text: '工序类别编号'},
						{dataIndex: 'workCateName', text: '工序类别名称'},
						{dataIndex: 'workProcessCode', text: '工序编码'},
						{dataIndex: 'workProcessName', text: '工序名称'},
						{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield'}},
						{dataIndex: 'workValue', text: '标准工分定额'},
						{dataIndex: 'workProcessValue', text: '工序价值',
								xtype : 'bllookupedit',
								displayvalue : Hc.pdsPath + 'pd_process_degree_coef/listAll.json',
								displaymember : 'workProcessValue',
								valuemember : 'workProcessValue',
								readOnly:true
						},
						{dataIndex: 'categoryNo', text: '鞋类编号'},
						{dataIndex: 'categoryName', text: '鞋类名称'},
						{dataIndex: 'isVirtual', text: '虚工序', xtype: "bllookupedit",displayvalue: "0=否:1=是"},
						{xtype:'gridcolumn',dataIndex: 'parentProcessId', text: '父工序ID',hidden:true,hideable:false},
						{dataIndex: 'units', text: '计算单位', xtype: "bllookupedit",displayvalue: "0=对:1=其它"},
						{dataIndex: 'enableFlag',text: '启用状态',xtype: "bllookupedit",editor: {allowBlank: false},displayvalue: "0=禁用:1=启用"},
						{dataIndex: 'description', text: '描述', editor: {allowBlank: true,maxLength:100,enforceMaxLength:true}}
					],
					gridPrimaryKey: 'processId',
					gridLoadUrl: Hc.pdsPath+'pd_work_process/list.json',
					//gridSaveUrl:  Hc.pdsPath+'pd_work_process/batchOperate.json',
					//gridExportUrl:Hc.pdsPath+'pd_work_process/do_export.json',
					//gridImportUrl: '',
					
					//searchColumn: 0,
					gridEditModel: 'cell',
					gridCanDrag: false,
					gridCanEdit: true,
					gridCanAdd: false,
					gridCanDelete: false,
					gridSelModel: 'SINGLE',
					
					grid1Model: 'Hc_pd.model.PdWorkProcess',
					grid1Columns: [
						{xtype:'gridcolumn',dataIndex: 'processId', text: '工序ID',hidden:true,hideable:false},
						{xtype:'gridcolumn',dataIndex: 'levelNo', text: '等级',hidden:true,hideable:false},
						{dataIndex: 'workGroupCode', text: '作业组',
								xtype : 'bllookupedit',
								displayvalue : Hc.pdsPath + 'pd_work_group/listAll.json',
								displaymember : 'workGroupName',
								valuemember : 'workGroupCode',
								readOnly:true
						},
						{dataIndex: 'workCateCode', text: '工序类别编号'},
						{dataIndex: 'workCateName', text: '工序类别名称'},
						{dataIndex: 'workProcessCode', text: '工序编码'},
						{dataIndex: 'workProcessName', text: '工序名称'},
						{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield'},hidden:true},
						{dataIndex: 'workValue', text: '标准工分定额'},
						{dataIndex: 'workProcessValue', text: '工序价值',
								xtype : 'bllookupedit',
								displayvalue : Hc.pdsPath + 'pd_process_degree_coef/listAll.json',
								displaymember : 'workProcessValue',
								valuemember : 'workProcessValue',
								readOnly:true
						},
						{dataIndex: 'categoryNo', text: '鞋类编号'},
						{dataIndex: 'categoryName', text: '鞋类名称'},
						{dataIndex: 'isVirtual', text: '虚工序', xtype: "bllookupedit",displayvalue: "0=否:1=是",readOnly:true},
						{xtype:'gridcolumn',dataIndex: 'parentProcessId', text: '父工序ID',hidden:true,hideable:false},
						{dataIndex: 'units', text: '计算单位', xtype: "bllookupedit",displayvalue: "0=对:1=其它",readOnly:true},
						{dataIndex: 'enableFlag',text: '启用状态',xtype: "bllookupedit",displayvalue: "0=禁用:1=启用",readOnly:true},
						{dataIndex: 'description', text: '描述'}
					],
					grid1PrimaryKey: 'processId',
					grid1LoadUrl: Hc.pdsPath+'pd_work_process/list.json',
					//grid1SaveUrl:  Hc.pdsPath+'pd_work_process/batchOperate.json',
					//grid1ExportUrl:Hc.pdsPath+'pd_work_process/do_export.json',
					//grid1ImportUrl: '',
					
					grid1EditModel: 'cell',
					grid1CanDrag: false,
					grid1CanEdit: true,
					grid1CanAdd: true,
					grid1CanDelete: true,
					grid1SelModel: 'SINGLE'					
				});
		Ext.apply(me.grid, { id: 'workProcessChooseGrid'});	
		Ext.apply(me.grid1, { id: 'workProcessChooseGrid1'});	
		
		treepanel = {
	                 xtype: 'treepanel',
	                 region: 'west',
	                 split: true,
	                 reference: 'menutree',
	                 itemId: 'menutree',
	                 width: 300,
	                 rootVisible: true,
	                 lines: true,
	                 columns: [
	                 	{xtype: 'treecolumn',flex: 1,dataIndex: 'workGroupCodeName',text: "基础工序工分",sortable: false,hideable: false}
	                 ],
	                 store:{
	                     model:'Hc_pd.model.PdWorkProcess',
	                     type:'treebase',
	                     proxy: {
	                         type: 'ajax',
	                         url:  Hc.pdsPath+'pd_work_process/listAll.json'
	                     },
	                     root: {
	                         id:0,
	                         workGroupCodeName: '全部',
	                         processId:0,
	                         levelNo:0,
	                         expanded: false
	                     },
	                     nodeParam:'processId',
	                     parentIdProperty:'parentProcessId'
	                 },
	                 listeners: {
	                     'selectionchange': 'onTreeSelectionChange',
	                     'afteritemexpand': 'onAfterItemExpand'
	                 }
					};		

        me.items = [me.toolbar];
        if (me.searchItems.length > 0) {
            me.items.push(me.searchPanel);
        }
        
	    var h=me.controller.getBodyHeight(0.4);
	    var con1={
			xtype:"panel",
			height:h,
			region:"north",
			layout:'border',
			items:[me.grid],
			split:true,
			border:false
	    };
	    
	    h=me.controller.getBodyHeight(0.04);
	    var con2={
				xtype:"panel",
				height:h,
				region:"north",
				layout:'border',
				items:[me.choosetoolbar],
				border:false
		    };	    
	
	    var con3={
			xtype:"panel",
			region:"center",
			layout:'border',
			items:[me.grid1],
			border:false
	    };
	    
	    var panelchild={
			xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[con2,con3],
	        border:false
	    };
	    
	    var rightpanel={
				xtype: "panel",
		        region: 'center',
		        layout:'border',
		        items:[con1,panelchild],
		        border:false
		    };	    
	
	    var panel = {
	        xtype: "panel",
	        region: 'center',
	        layout:'border',
	        items:[treepanel,rightpanel],
	        border:false
	    };
	    me.items.push(panel);

		me.callParent();
	}
});
