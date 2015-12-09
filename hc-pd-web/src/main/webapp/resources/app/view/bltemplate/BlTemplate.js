/**
 * Description: (default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-10 10:19:04
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.bltemplate.BlTemplate', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.bltemplate',
	requires: [
		'Hc_pd.model.BlTemplate',
		'Hc_pd.view.bltemplate.BlTemplateController',
		'Hc_pd.view.bltemplate.BlTemplateModel'
	],
	controller: 'bltemplate',
	viewModel: {
		type: 'bltemplate'
	},
	initComponent: function () {
		var me = this;
		
		Ext.apply(me, {
			searchItems: [{
                xtype: 'textfield',
                fieldLabel: '模板名称',
                name: 'name'
            }],
				
			gridModel: 'Hc_pd.model.BlTemplate',
			gridColumns: [
				{dataIndex: 'id', text: '模板编码', editor: {allowBlank: false}},
				{dataIndex: 'name', text: '模板名称', editor: {allowBlank: false}},
			],
			gridPrimaryKey: 'appNo',

			gridLoadUrl: Hc.pdsPath + 'bl_template/list.json',
			gridSaveUrl: Hc.pdsPath + 'bl_template/batchOperate.json',
			gridExportUrl: Hc.pdsPath + 'bl_template/do_export.json',
			gridImportUrl: Hc.pdsPath + ''
		});

		me.callParent();
	}
});
