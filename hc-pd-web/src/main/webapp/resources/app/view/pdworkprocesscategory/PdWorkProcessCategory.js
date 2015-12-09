/**
 * Description:  工序类别表(default)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Hc.
 * @author:     he.xy
 * @date:  2015-04-29 10:48:23
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategory', {
    extend: 'Hc_Common.view.BaseSimplePage',
    alias: 'widget.pdworkprocesscategory',
    requires: ['Hc_pd.model.PdWorkProcessCategory', 
               'Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategoryController', 
               'Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategoryModel'],
    controller: 'pdworkprocesscategory',
    viewModel: {
        type: 'pdworkprocesscategory'
    },
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            searchItems: [{
                xtype: 'textfield',
                fieldLabel: '工序类别编码',
                name: 'workCateCode'
            },
            {
                xtype: 'textfield',
                fieldLabel: '工序类别名称',
                name: 'workCateName'
            }],
            //网格
            gridModel: 'Hc_pd.model.PdWorkProcessCategory',
            gridColumns: [
            {
                dataIndex: 'workCateCode',
                text: '工序类别编码',
                editor: {
                    allowBlank: false,regex:/^[0-9a-zA-Z]+$/,  //只能输入字母、数字或者字母数字组合
					regexText:'请输入字母或数字'
                }
            },
            {
                dataIndex: 'workCateName',
                text: '工序类别名称',
                editor: {
                    allowBlank: false
                    
                }
            },
            {
            	dataIndex : 'enableFlag',
				text : '启用状态',
				renderer : 'renderUseFlag',
				editor : {
					allowBlank : false,
					xtype : 'combouseflag',
					maxLength : 30,
					enforceMaxLength : true
                }
            },
            {
                dataIndex: 'description',
                text: '描述',
                editor: {
                    allowBlank: true
                }
            }

            ],
            gridPrimaryKey: 'lineId',
            gridUnionKey: 'workCateCode',

            gridLoadUrl: Hc.pdsPath + 'pd_work_process_category/list.json',
            gridSaveUrl: Hc.pdsPath + 'pd_work_process_category/batchOperate.json',
            gridExportUrl: Hc.pdsPath + 'pd_work_process_category/do_export.json',
            gridImportUrl: Hc.pdsPath + ''
        });
        me.callParent();
    }
});