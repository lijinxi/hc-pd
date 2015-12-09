/**
 * Description: (default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocess.PdWorkProcess', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.pdworkprocess',
	requires: [
		'Hc_pd.model.PdWorkProcess',
		'Hc_pd.view.pdworkprocess.PdWorkProcessController',
		'Hc_pd.view.pdworkprocess.PdWorkProcessModel'
	],
	controller: 'pdworkprocess',
	viewModel: {
		type: 'pdworkprocess'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me,
		{
			gridModel: 'Hc_pd.model.PdWorkProcess',
			gridColumns: [
				{xtype:'gridcolumn',dataIndex: 'processId', text: '工序ID',hidden:true,hideable:false},
				{xtype:'gridcolumn',dataIndex: 'levelNo', text: '等级',hidden:true,hideable:false},
				{dataIndex: 'workGroupCode', text: '作业组', editor: {allowBlank: false},
						xtype : 'bllookupedit',
						displayvalue : Hc.pdsPath + 'pd_work_group/listAll.json',
						displaymember : 'workGroupName',
						valuemember : 'workGroupCode'	
				},
				{dataIndex: 'workCateCode', text: '工序类别编号', 
					editor: {
						xtype:'searchhelpfield',
						name:'workCateCode',
						reference: 'workCateCode',
						gridColumns:[
							{dataIndex:'workCateCode',text:'类别编号',flex:0.3},
							{dataIndex:'workCateName',text:'类别名称',flex:0.3},
							{dataIndex:'enableFlag',text:'启用状态',xtype: "bllookupedit",displayvalue: "0=禁用:1=启用",flex:0.3}],
							searchItems:[
										{fieldLabel : '类别编号',name:'workCateCode',flex:0.2},
										{fieldLabel : '类别名称',name:'workCateName',flex:0.2}
						],
						isAutoLoad:false,
						otherFields:"workCateName",
						url:Hc.pdsPath + 'pd_work_process_category/list.json?enableFlag=1',
						allowBlank: true,maxLength:30,enforceMaxLength:true
					}
				},
				{dataIndex: 'workCateName', text: '工序类别名称'},
				{dataIndex: 'workProcessCode', text: '工序编码'},
				{dataIndex: 'workProcessName', text: '工序名称', editor: {allowBlank: false,maxLength:30,enforceMaxLength:true}},
				{dataIndex: 'orderNo', text: '排列序号', editor: {allowBlank: true,xtype : 'numberfield'}},
				{dataIndex: 'workValue', text: '标准工分定额', 
					editor: {allowBlank: false,
						regex:/^(\+)?\d+(\.\d+)?$/,  //只能输入数字或小数
						regexText:'只能输入数字和.'	
					}
				},
				{dataIndex: 'workProcessValue', text: '工序价值', editor: {allowBlank: false},
						xtype : 'bllookupedit',
						displayvalue : Hc.pdsPath + 'pd_process_degree_coef/listAll.json',
						displaymember : 'workProcessValue',
						valuemember : 'workProcessValue'
				},
				{dataIndex: 'categoryNo', text: '鞋类编号',
					editor:{
						xtype:'searchhelpfield',
						name:'categoryNo',
						reference: 'categoryNo',
						gridColumns:[
							{dataIndex:'categoryNo',text:'类别编号',flex:0.3},
							{dataIndex:'categoryName',text:'类别名称',flex:0.3},
							{dataIndex:'enableFlag',text:'启用状态',xtype: "bllookupedit",displayvalue: "0=禁用:1=启用",flex:0.3}],
							searchItems:[
										{
											fieldLabel : '类别大类',
										    name:'categoryNo',
										    flex:0.5,
										    xtype : 'extcombox',
											displayvalue : Hc.mdmPath + 'bas_category/listCategory.json?type=1',
											displaymember : 'categoryName',
											valuemember : 'categoryNo'	
										 }
						],
						isAutoLoad:false,
						otherFields:"categoryName",
						url:Hc.mdmPath + 'bas_category/list.json',
						allowBlank: true
					}
				},
				{dataIndex: 'categoryName', text: '鞋类名称'},
				{dataIndex: 'isVirtual', text: '虚工序', xtype: "bllookupedit",displayvalue: "0=否:1=是"},
				{xtype:'gridcolumn',dataIndex: 'parentProcessId', text: '父工序ID',hidden:true,hideable:false},
				{dataIndex: 'units', text: '计算单位', xtype: "bllookupedit",displayvalue: "0=对:1=其它"},
				{dataIndex: 'enableFlag',text: '启用状态',xtype: "bllookupedit",editor: {allowBlank: false},displayvalue: "0=禁用:1=启用"},
				{dataIndex: 'description', text: '描述', editor: {allowBlank: true,maxLength:100,enforceMaxLength:true}}
			],
			gridPrimaryKey: 'processId',
			gridLoadUrl: Hc.pdsPath+'pd_work_process/list.json',
			gridSaveUrl:  Hc.pdsPath+'pd_work_process/batchOperate.json',
			gridExportUrl:Hc.pdsPath+'pd_work_process/do_export.json',
			gridImportUrl: '',
			
			searchColumn: 0,
			gridEditModel: 'cell',
			gridCanDrag: false,
			gridCanEdit: true,
			gridCanAdd: true,
			gridCanDelete: true,
			gridSelModel: 'SINGLE'
		});
		
		me.otherItems = [
		    {
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
        }];
		
		me.callParent();
	}
});
