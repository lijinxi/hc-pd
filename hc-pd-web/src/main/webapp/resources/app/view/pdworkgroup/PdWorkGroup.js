/**
 * Description: (default) All rights Reserved, Designed ByHc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: yinlp
 * @date: 2015-04-29 10:43:33
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkgroup.PdWorkGroup', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.pdworkgroup',
	requires : [ 'Hc_pd.model.PdWorkGroup',
			'Hc_pd.view.pdworkgroup.PdWorkGroupController',
			'Hc_pd.view.pdworkgroup.PdWorkGroupModel' ],
	controller : 'pdworkgroup',
	viewModel : {
		type : 'pdworkgroup'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {

			searchItems : [ {
				xtype : 'textfield',
				fieldLabel : '作业组编码',
				name : 'workGroupCode'
			}, {
				xtype : 'textfield',
				fieldLabel : '作业组名称',
				name : 'workGroupName'
			} ],

			gridColumns : [

			{
				dataIndex : 'workGroupCode',
				text : '作业组编码',
				maxLength : 30,
				enforceMaxLength : true,
				editor : {
					allowBlank : false,
					regex : /^[0-9a-zA-Z]+$/, // 只能输入字母、数字或者字母数字组合
					regexText : '请输入字母或数字'
				}
			}, {
				dataIndex : 'workGroupName',
				text : '作业组名称',
				maxLength : 30,
				enforceMaxLength : true,
				editor : {
					allowBlank : false
				}
			},
			{
				dataIndex : 'workGroupType',
				text : '作业组类别',
				maxLength : 20,
				enforceMaxLength : true,
				editor : {
					allowBlank : false
				}
			},
			{
				dataIndex : 'enableFlag',
				text : '启用状态',
				renderer : 'renderUseFlag',
				editor : {
					allowBlank : false,
					xtype : 'combouseflag',
					maxLength : 11,
					enforceMaxLength : true
				}
			}, {
				dataIndex : 'description',
				text : '描述',
				maxLength : 100,
				enforceMaxLength : true,
				editor : {
					allowBlank : true
				}
			},

			],

			gridModel : 'Hc_pd.model.PdWorkGroup',

			gridPrimaryKey : 'lineId',
			gridUnionKey : 'workGroupCode',

			gridLoadUrl : Hc.pdsPath + 'pd_work_group/list.json',
			gridSaveUrl : Hc.pdsPath + 'pd_work_group/batchOperate.json',
			gridExportUrl : Hc.pdsPath + 'pd_work_group/do_export.json',
			gridImportUrl : Hc.pdsPath + '',

			searchColumn : 4,
			gridEditModel : 'cell',
			gridCanDrag : false,
			gridCanEdit : true,
			gridCanAdd : true,
			gridCanDelete : true,
			gridSelModel : 'MULTI'
		});
		me.callParent();
	}
});
