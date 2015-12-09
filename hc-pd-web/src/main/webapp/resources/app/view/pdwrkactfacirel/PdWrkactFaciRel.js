/**
 * Description: 事业部工序工分表成品关系表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRel', {
	extend: 'Hc_Common.view.BaseBillDetailPage',
	alias: 'widget.pdwrkactfacirel',
	requires: [
		'Hc_pd.model.PdWrkactFaciRel',
		'Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRelController',
		'Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRelModel',
		'Hc_pd.model.PdWrkactFaci',
	],
	controller: 'pdwrkactfacirel',
	viewModel: {
		type: 'pdwrkactfacirel'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			/*
			billItems: [{
				name:'styleNo',allowBlank:false,bind:{value:'{billRow.styleNo}'},
				fieldLabel:'款号',xtype:'textfield'
			},
			{
				name:'modelNo',allowBlank:false,bind:{value:'{billRow.modelNo}'},
				fieldLabel:'型体',xtype:'textfield'
			},{
				name:'categoryNo',allowBlank:false,bind:{value:'{billRow.categoryNo}'},
				fieldLabel:'鞋类',xtype:'textfield'
			},{
				name:'versionNo',allowBlank:false,bind:{value:'{billRow.versionNo}'},
				fieldLabel:'版本号',xtype:'textfield'
			}],
			
			billLoadUrl: Hc.pdsPath + 'pd_wrkact_faci/list.json',
			billSaveUrl: Hc.pdsPath + 'pd_wrkact_faci/saveMasterCustomerList.json',
			billAuditUrl:Hc.pdsPath + 'pd_wrkact_faci/audit.json',
			billExportUrl:Hc.pdsPath + 'pd_wrkact_faci/do_export.json',
			billModel: 'Hc_pd.model.PdWrkactFaci',
			billSubGrid:['mastergrid'],
			billType:'131110',
			*/
			gridColumns: [
						{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
						{dataIndex: 'wrkactNo', text: '工序工分表编号', editor: {allowBlank: false}},
						{dataIndex: 'materialNo', text: '对应成品编号', editor: {allowBlank: false}},
					],
					
					gridPrimaryKey: 'lineId',
					gridModel:'Hc_pd.model.PdWrkactFaciRel',
					gridLoadUrl:Hc.pdsPath + 'pd_wrkact_faci_rel/list.json'

		});
		me.callParent();
	}
});
