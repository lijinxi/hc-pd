/**
 * Description: 本部工序工分表主表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialog', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.pdwrkactmaindialog',
	requires: [
		'Hc_pd.model.PdWrkactMain',		
		'Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialogController',
		'Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialogModel'
	],
	controller: 'pdwrkactmaindialog',
	viewModel: {
		type: 'pdwrkactmaindialog'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
							{xtype : 'textfield',fieldLabel : '款号',name : 'styleNo'},
							{xtype : 'textfield',fieldLabel : '型体',name : 'modelNo'},
							{xtype : 'textfield',fieldLabel : '鞋类',name : 'categoryNo'}
			              ],
			gridColumns: [
							{dataIndex: 'billNo', text: '单据编号'},
							{dataIndex: 'wrkactNo', text: '工序工分表编号'},
							{dataIndex: 'wrkactType', text: '工序工分表类别'},
							{dataIndex: 'modelNo', text: '型体'},
							{dataIndex: 'styleNo', text: '款号'},
							{dataIndex: 'categoryNo', text: '鞋类(类别编号)'},
							{dataIndex: 'versionNo', text: '版本号'}							
						],
			gridModel: 'Hc_pd.model.PdWrkactMain',
			gridLoadUrl: Hc.pdsPath + 'pd_wrkact_main/list.json',
			showModel:'selftab'
		});
		Ext.apply(me.grid, { id: 'PdWrkactMainDialogGrid'});	
		me.callParent();
	}
});

