/**
 * Description: 工序等级系数表(default) All rights Reserved, Designed ByHc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: yinlp
 * @date: 2015-04-29 10:39:59
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoef', {
	extend : 'Hc_Common.view.BaseSimplePage',
	alias : 'widget.pdprocessdegreecoef',
	requires : [ 'Hc_pd.model.PdProcessDegreeCoef',
			'Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoefController',
			'Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoefModel' ],
	controller : 'pdprocessdegreecoef',
	viewModel : {
		type : 'pdprocessdegreecoef'
	},
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			// searchItems: [{
			// xtype: 'textfield',
			// fieldLabel: '工序价值',
			// name: 'workProcessValue'
			// }],
			gridColumns : [

			{
				dataIndex : 'workProcessValue',
				text : '工序价值',
				maxLength : 11,
				enforceMaxLength : true,
				editor : {
					allowBlank : false,
					regex : /^[0-9]+$/, // 只能输入数字
					regexText : '请输入数字'
				}
			}, {
				dataIndex : 'workProcessCoef',
				text : '工序系数',
				maxLength : 6,
				enforceMaxLength : true,
				editor : {
					allowBlank : false,
					regex : /^[0-9]+$/, // 只能输入数字
					regexText : '请输入数字'
				}
			}, {
				dataIndex : 'workProcessDegree',
				text : '工序等级',
				maxLength : 20,
				enforceMaxLength : true,
				editor : {
					allowBlank : false
				}
			}, {
				dataIndex : 'enableFlag',
				text : '启用状态',
				renderer : 'renderUseFlag',
				editor : {
					allowBlank : false,
					xtype : 'combouseflag',
					maxLength : 11,
					enforceMaxLength : true
				}
			} ],

			gridModel : 'Hc_pd.model.PdProcessDegreeCoef',

			gridPrimaryKey : 'lineId',
			gridUnionKey : 'workProcessValue',

			gridLoadUrl : Hc.pdsPath + 'pd_process_degree_coef/list.json',
			gridSaveUrl : Hc.pdsPath
					+ 'pd_process_degree_coef/batchOperate.json',
			gridExportUrl : Hc.pdsPath
					+ 'pd_process_degree_coef/do_export.json',
			gridImportUrl : '',

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
