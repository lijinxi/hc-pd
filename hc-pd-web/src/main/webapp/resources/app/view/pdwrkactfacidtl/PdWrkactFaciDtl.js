/**
 * Description: 事业部工序工分表工序从表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtl', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.pdwrkactfacidtl',
	requires: [
		'Hc_pd.model.PdWrkactFaciDtl',
		'Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtlController',
		'Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtlModel',
		'Hc_pd.model.PdWrkactFaci',
	],
	controller: 'pdwrkactfacidtl',
	viewModel: {
		type: 'pdwrkactfacidtl'
	},
	initComponent: function () {
		var me= this;
		var workgroupStore = Ext.create('Hc_pd.store.WorkGroup');
		Ext.apply(me, {
			billItems: [{
				name:'wrkactType',reference:'wrkactType',allowBlank:true,bind:{value:'{billRow.wrkactType}'},
				fieldLabel:'工分表类别',xtype:'extcombox',
				displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                displaymember: 'itemName',
                valuemember: 'itemCode',
				canInput:false
			},
			 {
				name:'styleNo',allowBlank:true,bind:{value:'{billRow.styleNo}'},
				fieldLabel:'款号',xtype:'textfield',canInput:false
			},
			{
				name:'modelNo',allowBlank:true,bind:{value:'{billRow.modelNo}'},
				fieldLabel:'型体',xtype:'textfield',canInput:false
			},{
				name:'categoryNo',allowBlank:true,bind:{value:'{billRow.categoryNo}'},
				fieldLabel:'鞋类',xtype:'textfield',canInput:false
			},{
				name:'versionNo',allowBlank:true,bind:{value:'{billRow.versionNo}'},
				fieldLabel:'版本号',xtype:'textfield',canInput:false
			}],
			
			billLoadUrl: Hc.pdsPath + 'pd_wrkact_faci/list.json',
			billSaveUrl: Hc.pdsPath + 'pd_wrkact_faci/saveMasterCustomerList.json',
			billAuditUrl:Hc.pdsPath + 'pd_wrkact_faci/audit.json',
			billExportUrl:Hc.pdsPath + 'pd_wrkact_faci/do_export.json',
			billModel: 'Hc_pd.model.PdWrkactFaci',
			billSubGrid:['mastergrid','grid1'],
			billType:'WrkactMain',
			
			gridColumns: [
						//{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
						//{dataIndex: 'wrkactNo', text: '工序工分表编号', editor: {allowBlank: false}},
						{dataIndex: 'workProcessCode', text: '工序编码'},
						{dataIndex: 'workGroupCode',
							xtype:'bllookupedit',
							estore: workgroupStore,
							gstore: workgroupStore,
							displaymember:'workGroupName',
							valuemember:'workGroupCode',
							text: '作业组别', editor: {allowBlank: false}},
						{dataIndex: 'workProcessName', text: '工序名称'},
						{dataIndex: 'toWorkGroupCode', text: '转移作业组别',
							xtype:'bllookupedit',
							estore: workgroupStore,
							gstore: workgroupStore,
							displaymember:'workGroupName',
							valuemember:'workGroupCode',
							editor: {allowBlank: true}},
						{dataIndex: 'aliasName', text: '工序别名'},
						{dataIndex: 'standard', text: '标准工分定额'},
						//{dataIndex: 'orderNo', text: '序号'},
						{dataIndex: 'unitNo', text: '计算单位'},
						{dataIndex: 'funcRelation', text: '函数关系'},
						{dataIndex: 'workValue', text: '工分值'},
						{dataIndex: 'workProcessValue', text: '工序价值'},
						{dataIndex: 'categoryNo', text: '鞋类'},
						{dataIndex: 'description', text: '工序描述'},
						{dataIndex: 'remarks', text: '备注'}
						
					],
					gridTitle:'工序工分',
					gridPrimaryKey: 'lineId',
					gridModel:'Hc_pd.model.PdWrkactFaciDtl',
					gridLoadUrl:Hc.pdsPath + 'pd_wrkact_faci_dtl/listAll.json',
					
		    grid1Columns: [
									{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
									{dataIndex: 'wrkactNo', text: '工序工分表编号', editor: {allowBlank: false},hidden:true},
									{dataIndex: 'materialNo', text: '对应成品编号'},
									{dataIndex: 'materialName', text: '对应成品名称'},
									{dataIndex: 'styleNo', text: '款号'},
									{dataIndex: 'modelNo', text: '型体'}
						  ],
						  
					    grid1HasOrderNo:false,
						grid1Title:'对应产品',
						grid1PrimaryKey: 'lineId',
						grid1Model:'Hc_pd.model.PdWrkactFaciRel',
						grid1LoadUrl:Hc.pdsPath + 'pd_wrkact_faci_rel/listAll.json',
						grid1SaveUrl : Hc.pdsPath+ 'pd_wrkact_faci_rel/batchOperate.json'

								
		});
		
		    me.callParent();
	}
});
