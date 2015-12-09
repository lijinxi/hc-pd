/**
 * Description: 本部工序工分表工序从表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.pdwrkactmaindtl',
	requires: [
		'Hc_pd.model.PdWrkactMainDtl',
		'Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlController',
		'Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlModel',
		'Hc_pd.model.PdWrkactMainRel',
		'Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialog'
	],
	controller: 'pdwrkactmaindtl',
	viewModel: {
		type: 'pdwrkactmaindtl'
	},
	initComponent: function () {
		var me= this;
		var workgroupStore = Ext.create('Hc_pd.store.WorkGroup');
		Ext.apply(me, {
			billType :"WrkactMain",
			billItems: [
	            {
			    	xtype : 'extcombox',
			    	fieldLabel : '工分表类别',
			    	name :'wrkactType',
			    	displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
			    	reference:'wrkactType',
			    	allowBlank:false,
			    	bind:{value:'{billRow.wrkactType}'}
			    },
			    {xtype : 'textfield',fieldLabel : '款号',name : 'styleNo',reference:"styleNo",bind:{value:'{billRow.styleNo}'}},
			    {xtype : 'textfield',fieldLabel : '鞋类',name : 'categoryNo',reference:"categoryNo",allowBlank:false,bind:{value:'{billRow.categoryNo}'}},
			    {xtype : 'textfield',fieldLabel : '版本',name : 'versionNo',reference:"versionNo",bind:{value:'{billRow.versionNo}'}},
			    {xtype : 'textfield',fieldLabel : '型体',name : 'modelNo',reference:"modelNo",bind:{value:'{billRow.modelNo}'}}
			        ],
	        billLoadUrl: Hc.pdsPath + 'pd_wrkact_main/list.json',
			billSaveUrl: Hc.pdsPath + 'pd_wrkact_main/saveMasterCustomerList.json',
			billAuditUrl:Hc.pdsPath + 'pd_wrkact_main/audit.json',
			billExportUrl:Hc.pdsPath + 'pd_wrkact_main/do_export.json',
			billModel: 'Hc_pd.model.PdWrkactMain',
			billSubGrid:['mastergrid','grid1'],
			//editStatus: 10,
            gridUnionKey:"wrkactNo",
            
            gridColumns: [
          				{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
          				{dataIndex: 'wrkactNo', text: '工序工分表编号', editor: {allowBlank: true},hidden:true},	          				
          				{dataIndex: 'workProcessCode', text: '工序编码', editor: {allowBlank: false}},
          				{dataIndex: 'workProcessName', text: '工序名称'},
          				{dataIndex: 'description', text: '描述'},
          				{dataIndex: 'workValue', text: '工分值', editor: {allowBlank: false}},
          				{dataIndex: 'orderNo', text: '序号', editor: {allowBlank: false},hidden:true},
          				{
          					dataIndex: 'workGroupCode',
          					text: '作业组别',
          					xtype:'bllookupedit',
          					estore: workgroupStore,
							gstore: workgroupStore,
							displaymember:'workGroupName',
							valuemember:'workGroupCode',
          					},
          				{dataIndex: 'unitNo', text: '单位编号', editor: {allowBlank: false}},
          				{dataIndex: 'standard', text: '标准工分定额', editor: {allowBlank: true}},
          				{dataIndex: 'funcRelation', text: '函数关系', editor: {allowBlank: true}},
          				{dataIndex: 'aliasName', text: '别名', editor: {allowBlank: true}},
          			],
  			gridPrimaryKey: 'lineId',
  			gridTitle:'工序工分表',
			gridModel: 'Hc_pd.model.PdWrkactMainDtl',
			gridLoadUrl: Hc.pdsPath + 'pd_wrkact_main_dtl/listAll.json',
			gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
		   	gridHasOrderNo:true,
		   	gridUnionKey:"wrkactNo,orderNo",

		   	grid1Columns:[
							{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
							{dataIndex: 'wrkactNo', text: '工序工分表编号', editor: {allowBlank: true},hidden:true},
							{dataIndex: 'materialNo', text: '对应成品编号', editor: {allowBlank: false}},
							{dataIndex: 'materialName', text: '对应成品名称'},
							{dataIndex: 'styleNo', text: '款号'},
							{dataIndex: 'modelNo', text: '型体'},
			       		],
		   	grid1Model: 'Hc_pd.model.PdWrkactMainRel',
		   	grid1PrimaryKey:'lineId',
		   	grid1Title:'对应产品',
		   	grid1HasMark:false,
		   	grid1HasCreator:false,
		   	grid1HasModifier:false,
		   	grid1HasAuditor:false,
		   	grid1HasOrderNo:false,
		   	grid1UnionKey:"materialNo",
		   	grid1LoadUrl: Hc.pdsPath + 'pd_wrkact_main_rel/listAll.json'
		});
	
		me.callParent();
	}
});
