/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_pd.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_pd',
    
    
       	
    appFolder:'resources/app',

    init: function() {
        var me = this;
        me.setDefaultToken('bltemplate');
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.QuickTips.init();
    },

    launch: function () {

    }
});

/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-10 10:19:04
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.BlTemplate', {
    extend: 'Ext.data.Model',
    alias: 'model.bltemplate',
     fields: [
         {name: 'id', text: '模板编码', type: 'string'},
         {name: 'name', text: '模板名称', type: 'string'},
         ],
    idProperty: 'id',
    identifier: 'negative'
  });
/**
 * Description:  工序等级系数表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:59
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdProcessDegreeCoef', {
    extend: 'Ext.data.Model',
    alias: 'model.pdprocessdegreecoef',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workProcessValue', text: '工序价值'},
         {name: 'workProcessCoef', text: '工序系数', type: 'float'},
         {name: 'workProcessDegree', text: '工序等级', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:43:33
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkGroup', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkgroup',
     fields: [
        // {name: 'pdWorkGroup', text: ' 作业组表', type: 'BASE TABLE'},
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workGroupType', text: '作业组类别', type: 'string'},
         {name: 'workGroupCode', text: '作业组编码', type: 'string'},
         {name: 'workGroupName', text: '作业组名称', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: (app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkProcess', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkprocess',
     fields: [
         {name: 'processId', text: '工序ID', type: 'int'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'orderNo', text: '排列序号', type: 'int'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'workValue', text: '标准工分定额', type: 'float'},
         {name: 'workGroupCode', text: '作业组', type: 'string'},
         {name: 'isVirtual', text: '是否为虚工序', type: 'int'},
         {name: 'parentProcessId', text: '父工序ID', type: 'int'},
         {name: 'units', text: '计算单位', type: 'int'},
         {name: 'categoryNo', text: '鞋类编号', type: 'string'},
         {name: 'categoryName', text: '鞋类名称', type: 'string'},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'workProcessValue', text: '工序价值', type: 'int'},
         {name: 'workCateCode', text: '工序类别编号', type: 'string'},
         {name: 'workCateName', text: '工序类别名称', type: 'string'},
         {name: 'levelNo', text: '等级', type: 'int'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'}
         ],
    idProperty: 'processId',
    identifier: 'negative'         
  });
/**
 * Description:  工序类别表(app/model)
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:48:23
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWorkProcessCategory', {
    extend: 'Ext.data.Model',
    alias: 'model.pdworkprocesscategory',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'workCateCode', text: '工序类别编码', type: 'string'},
         {name: 'workCateName', text: '工序类别名称', type: 'string'},
         {name: 'enableFlag', text: '启用状态(0=禁用 1=启用)', type: 'int',defaultValue:1},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'creator', text: '建档人', type: 'string'},
         {name: 'createTime', text: '建档时间'},
         {name: 'modifier', text: '修改人', type: 'string'},
         {name: 'modifyTime', text: '修改时间'},
         {name: 'remarks', text: '备注', type: 'string'},
         ]
  });
/**
 * Description: 事业部工序工分表主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaci', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfaci',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'wrkactType', text: '工序工分表类别(取数据字典 workshop_type)', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'categoryNo', text: '鞋类(类别编号)', type: 'string'},
         {name: 'versionNo', text: '版本号', type: 'int'},
         {name: 'isoNo', text: '表号', type: 'string'},
         {name: 'billStatus', text: '状态', type: 'int'},
         {name: 'creator', text: '创建者', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改者', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 事业部工序工分表工序从表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaciDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfacidtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         //{name: 'workGroupName', text: '作业组', type: 'string'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'description', text: '工序描述', type: 'string'},
         {name: 'workValue', text: '工分值', type: 'float'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'workGroupCode', text: '作业组别', type: 'string'},
         {name: 'unitNo', text: '单位', type: 'string'},
         {name: 'standard', text: '标准工分定额', type: 'string'},
         {name: 'funcRelation', text: '函数关系', type: 'int'},
         {name: 'aliasName', text: '别名', type: 'string'},
         {name: 'toWorkGroupCode', text: '转移作业组别', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'},
         {name: 'workProcessValue', text: '工序价值', type: 'string'}
         ]

  });
/**
 * Description: 事业部工序工分表成品关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactFaciRel', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactfacirel',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'materialNo', text: '对应成品编号', type: 'string'},
         {name: 'materialName', text: '成品名称', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'}
         ]
  });
/**
 * Description: 本部工序工分表主表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactMain', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactmain',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'billNo', text: '单据编号', type: 'string'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'wrkactType', text: '工序工分表类别(取数据字典 workshop_type)', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'categoryNo', text: '鞋类(类别编号)', type: 'string'},
         {name: 'versionNo', text: '版本号', type: 'int'},
         {name: 'isoNo', text: '表号', type: 'string'},
         {name: 'billStatus', text: '状态', type: 'int'},
         {name: 'creator', text: '创建者', type: 'string'},
         {name: 'createTime', text: '创建时间', type: 'string'},
         {name: 'modifier', text: '修改者', type: 'string'},
         {name: 'modifyTime', text: '修改时间', type: 'string'},
         {name: 'auditor', text: '审核人', type: 'string'},
         {name: 'auditTime', text: '审核时间', type: 'string'},
         {name: 'remarks', text: '备注', type: 'string'}
         ]
  });
/**
 * Description: 本部工序工分表工序从表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactMainDtl', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactmaindtl',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},        
         {name: 'workProcessCode', text: '工序编码', type: 'string'},
         {name: 'workProcessName', text: '工序名称', type: 'string'},
         {name: 'description', text: '描述', type: 'string'},
         {name: 'workValue', text: '工分值', type: 'int'},
         {name: 'orderNo', text: '序号', type: 'int'},
         {name: 'workGroupCode', text: '作业组别', type: 'string'},
         {name: 'unitNo', text: '单位编号', type: 'string'},
         {name: 'standard', text: '标准工分定额', type: 'string'},
         {name: 'funcRelation', text: '函数关系', type: 'int'},
         {name: 'aliasName', text: '别名', type: 'string'}
         ]
  });
/**
 * Description: 本部工序工分表成品关系表(app/model)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:17
 * @version 1.0.0
 */
Ext.define('Hc_pd.model.PdWrkactMainRel', {
    extend: 'Ext.data.Model',
    alias: 'model.pdwrkactmainrel',
     fields: [
         {name: 'lineId', text: '行id(主键)', type: 'int'},
         {name: 'wrkactNo', text: '工序工分表编号', type: 'string'},
         {name: 'materialNo', text: '对应成品编号', type: 'string'},
         {name: 'materialName', text: '对应成品名称', type: 'string'},
         {name: 'styleNo', text: '款号', type: 'string'},
         {name: 'modelNo', text: '型体', type: 'string'},
         ]
  });
/**
 * Description:
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_pd.store.BlTemplate', {
    extend: 'Ext.data.Store',

    alias: 'store.bltemplate',

    storeId:'bltemplate',

    model:'Hc_pd.model.BlTemplate'
});
/**
 * Description: 作业组store
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-8 
 */
Ext.define('Hc_pd.store.WorkGroup',{
    extend:'Hc_Common.store.NoajaxComBase',
    alias:'store.WorkGroup',
    model:'Hc_pd.model.PdWorkGroup',
    autoLoad:true,
    proxy: {
        url: Hc.pdsPath+'pd_work_group/listAll.json'    
    }
});

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

/**
 * Description: Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-10 10:19:04
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.bltemplate.BlTemplateController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.bltemplate'
  });
/**
 * Description: Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     liutao
 * @date:  2015-03-10 10:19:04
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.bltemplate.BlTemplateModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.bltemplate'
  });
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

/**
 * Description:  工序等级系数表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:59
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoefController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdprocessdegreecoef'
  });
/**
 * Description:  工序等级系数表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:59
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoefModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdprocessdegreecoef'
  });
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

/**
 * Description: Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:43:33
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkgroup.PdWorkGroupController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdworkgroup',
    
    /* 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识*/
   onBtnDeleteClick: function (btn) {
       var obj = this.workObject,
           store = obj.getStore(),
           delflag = false,
           items = obj.getSelection();

       if (items.length < 1) return;
       if (obj.isReadOnly)return;
       if (this.checkDelete(items) === false) return;
       Ext.Array.each(items, function (record) {
           var _flag = record.get('_flag');
           if (_flag == 'A') {
               store.remove(record);
           } else {
               if (obj.isCanDelete) {
               	var work_group_code = record.get('workGroupCode');
               	Ext.Ajax.request({            
          		     		url: Hc.pdsPath+'pd_work_group/checkDelete.json',
          		     	   async:false,
          		     		params: {       
          		     			workGroupCode:work_group_code            
          		     		},    
          		     success: function(response, options) {    
          		    	var result=response.responseText;
          		    	if (result!=""){
          		    		Hc.alert(result);
          		    	}else{
                           record.set('_flag', 'D');
                           delflag = true;
          		    	}
          		    }       
          		}); 
               } else {
                   Hc.alert('此网格的数据不能删除');
                   return false;
               }
           }
       });
       if (delflag) {
           obj.view.refresh();
       }
   },
    
    
  });
/**
 * Description: Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:43:33
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdworkgroup.PdWorkGroupModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdworkgroup'
  });
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

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocess.PdWorkProcessController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdworkprocess',
    init:function() {

		var me = this,
        objList = me.getObjList();

        if (!objList) return;

        if (!me.workObject && objList.mastergrid) {
            me.workObject = objList.mastergrid;
        }

		me.callParent(arguments);
		
		//隐藏基类按钮和处理自定义按钮
		objList.btnSearch.setVisible(false);
		objList.btnReset.setVisible(false);
		objList.btnCopy.setVisible(false);
		objList.btnEdit.setVisible(false);
		objList.btnOther1.setVisible(true);
		objList.btnOther1.setText('刷新树');
		objList.btnOther1.setGlyph(Hc.Icon.btnRefresh);
		
		//默认选中根节点
		var tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(tree.getRootNode());
	},
	  /*
	   * 重新刷新树的根节点
	   */
	  onRefreshTree:function(){
		    var me = this;
		    var tree = me.lookupReference('menutree');
		    var storeTree = tree.store;
		    
			storeTree.proxy.extraParams.processId = 0;
			storeTree.load();
	   		delete storeTree.proxy.extraParams['processId'];
	   		
	   		//如果重新刷新树的根节点则清空网格里的数据
	   		var objs = me.getObjList();
			var storeGrid = objs.mastergrid.store;
			delete storeGrid.proxy.extraParams['processId'];
			storeGrid.proxy.extraParams.processId = 0;
			storeGrid.load();
	  },
	  
    /*
	 * 树节点选择改变
	 */
	onTreeSelectionChange: function (sm, selections) {
		var me = this,
        objs = me.getObjList();

        if (!objs) return;
        
		store = objs.mastergrid.store,
		
		selLength=sm.selected.items.length;
		
		if (selLength==1) {
			var processId=sm.selected.items[0].data.processId;
			store.proxy.extraParams.processId = processId;
		}else{
			//store.proxy.extraParams.processId = -1;
		}
		
		store.reload();
		
		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
	},
	
	/*
	 * 树节点展开后
	 */
	onAfterItemExpand: function(node,index,item,opts){
		var me = this,
        tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(node);
	},
	
	/*
	 * 新增行，赋默认值
	 */
	initAddData: function (newObj) {
		var me = this,
        tree = me.lookupReference('menutree');
		
		if (!tree.selection) {
			Hc.alert("请先选择一个树节点再增加！");
			return false;
		}
		
		var processId = tree.selection.data.processId,
		levelNo = tree.selection.data.levelNo;
		workGroupCode = tree.selection.data.workGroupCode,
		workCateCode = tree.selection.data.workCateCode,
		workCateName = tree.selection.data.workCateName;
		newObj.data.parentProcessId = processId;
		newObj.data.enableFlag = 1;
		newObj.data.levelNo = levelNo+1;
		newObj.data.workGroupCode = workGroupCode;
		newObj.data.workCateCode = workCateCode;
		newObj.data.workCateName = workCateName;
    },
    
     /* 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识*/
    onBtnDeleteClick: function (btn) {
        var obj = this.workObject,
            store = obj.getStore(),
            delflag = false,
            items = obj.getSelection();

        if (items.length < 1) return;
        if (obj.isReadOnly)return;
        if (this.checkDelete(items) === false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
                store.remove(record);
            } else {
                if (obj.isCanDelete) {
                	var process_id = record.get('processId');
                	Ext.Ajax.request({            
           		     		url: Hc.pdsPath+'pd_work_process/checkDelete.json',
           		     	   async:false,
           		     		params: {       
           		     			processId:process_id             
           		     		},    
           		     success: function(response, options) {    
           		    	var result=response.responseText;
           		    	if (result!=""){
           		    		Hc.alert(result);
           		    	}else{
                            record.set('_flag', 'D');
                            delflag = true;
           		    	}
           		    }       
           		}); 
                } else {
                    Hc.alert('此网格的数据不能删除');
                    return false;
                }
            }
        });
        if (delflag) {
            obj.view.refresh();
        }
    },
    
	/*
     * 数据保存后处理是否刷新树节点
     */
	afterSave:function(result,options) {
			var me = this;
			 me.callParent(arguments);
			 
	        var objs = me.getObjList();
			
	        if (!objs) return;
			
	        var tree = me.lookupReference('menutree'),
	        storeTree = tree.store,
	        storeGrid = objs.mastergrid.store;
			
	        var selNode = tree.selection;
			if (!selNode) return;

			var isLoad = 0;
			var childNodes = selNode.childNodes;
			for(j=0;j<childNodes.length;j++){
				var cNode = childNodes[j];
				if (cNode.data.expanded==true){
					isLoad=1;
					break;
				}
			}

			if (isLoad===1){
				me.onRefreshTree();
			}else{
				storeTree.reload();
			}
	  },
	  /*
	   * 刷新树按钮
	   */
	  onBtnOther1:function(btn){
		  this.onRefreshTree();
	  }
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdworkprocess.PdWorkProcessModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdworkprocess'
  });
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
/**
 * Description:  工序类别表Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:48:23
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategoryController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdworkprocesscategory',

    	 /* 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识*/
    	 onBtnDeleteClick: function (btn) {
    	       var obj = this.workObject,
    	           store = obj.getStore(),
    	           delflag = false,
    	           items = obj.getSelection();

    	       if (items.length < 1) return;
    	       if (obj.isReadOnly)return;
    	       if (this.checkDelete(items) === false) return;
    	       Ext.Array.each(items, function (record) {
    	           var _flag = record.get('_flag');
    	           if (_flag == 'A') {
    	               store.remove(record);
    	           } else {
    	               if (obj.isCanDelete) {
    	               	var work_cate_code = record.get('workCateCode');
    	               	Ext.Ajax.request({            
    	          		     		url: Hc.pdsPath+'pd_work_process_category/checkDelete.json',
    	          		     	   async:false,
    	          		     		params: {       
    	          		     			workCateCode:work_cate_code            
    	          		     		},    
    	          		     success: function(response, options) {    
    	          		    	var result=response.responseText;
    	          		    	if (result!=""){
    	          		    		Hc.alert(result);
    	          		    	}else{
    	                           record.set('_flag', 'D');
    	                           delflag = true;
    	          		    	}
    	          		    }       
    	          		}); 
    	               } else {
    	                   Hc.alert('此网格的数据不能删除');
    	                   return false;
    	               }
    	           }
    	       });
    	       if (delflag) {
    	           obj.view.refresh();
    	       }
    	   },
  });
/**
 * Description:  工序类别表Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:48:23
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategoryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdworkprocesscategory'
  });
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

/**
 * Description: Controller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdworkprocesschoose.PdWorkProcessChooseController', {
    extend: 'Hc_pd.view.pdworkprocess.PdWorkProcessController',
    alias: 'controller.pdworkprocesschoose',
    init:function() {
		var me = this;
		me.callParent(arguments);
		
		//按钮控制
		var items = me.lookupReference('commontoolbar').items;
		for(var i=0;i<items.length;i++){
			var item = items.getAt(i);
	    	item.setVisible(item.itemId=='btnSearch'||item.itemId=='btnOther1');
	    	if(item.itemId=='btnOther1'){
	    		item.setText('刷新树');
	    		item.setGlyph(Hc.Icon.btnRefresh);
	    	}
		}
		//隐藏分页插件
		//me.getObj('mastergrid').down("pagingtoolbar").setVisible(false);
		me.getObj('grid1').down("pagingtoolbar").setVisible(false);
		//默认选中根节点
		var tree = me.lookupReference('menutree');
		tree.getSelectionModel().select(tree.getRootNode());
	},
	
	//添加
	onBtnAddProcessClick: function (btn) {
		this.onBtnAddClick(null);
	},
	
	//移除
	onBtnRemoveProcessClick: function (btn) {
		this.onBtnDeleteClick(null);
	},
	
	onBtnAddClick: function (btn) {
		var me = this,
		objlist = me.getObjList();
		me.workObject=objlist['grid1'];
		me.callParent(arguments);
	},
	
	onBtnDeleteClick: function (btn) {
		var me = this,
		objlist = me.getObjList();
		me.workObject=objlist['grid1'];
		me.callParent(arguments);
	},
    
	initAddData: function (newObj) {
        var me = this,
        objlist = me.getObjList();

        //me.callParent(arguments);
    	var item = objlist['mastergrid'].getSelection()[0];
    	if(!item){
            Hc.alert("请先选择工序");
            return false;
    	}
        //newObj.set('processId', item.get('processId'));
        newObj.set('levelNo', item.get('levelNo'));
        newObj.set('workGroupCode', item.get('workGroupCode'));
        newObj.set('workCateCode', item.get('workCateCode'));
        newObj.set('workCateName', item.get('workCateName'));
        newObj.set('workProcessCode', item.get('workProcessCode'));
        newObj.set('workProcessName', item.get('workProcessName'));
        newObj.set('orderNo', item.get('orderNo'));
        newObj.set('workValue', item.get('workValue'));
        newObj.set('workProcessValue', item.get('workProcessValue'));
        newObj.set('categoryNo', item.get('categoryNo'));
        newObj.set('categoryName', item.get('categoryName'));
        newObj.set('isVirtual', item.get('isVirtual'));
        newObj.set('parentProcessId', item.get('parentProcessId'));
        newObj.set('units', item.get('units'));
        newObj.set('enableFlag', item.get('enableFlag'));
        newObj.set('description', item.get('description'));         
    },
    
    /*重写查询按钮*/
    onBtnSearchClick: function (btn) {
	    var me = this;
	    var tree = me.lookupReference('menutree');
	    var storeTree = tree.store;
   		delete storeTree.proxy.extraParams['processId'];
   		delete storeTree.proxy.extraParams['workProcessCode'];
   		delete storeTree.proxy.extraParams['workProcessName'];
   		
   		//如果重新刷新树的根节点则清空网格里的数据
   		var objs = me.getObjList();
		var storeGrid = objs.mastergrid.store;
		delete storeGrid.proxy.extraParams['processId'];
   		delete storeGrid.proxy.extraParams['workProcessCode'];
   		delete storeGrid.proxy.extraParams['workProcessName'];
    	
    	me.callParent(arguments);
    }
    
  });
/**
 * Description: Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     lucheng
 * @date:  2015-04-29 10:38:39
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdworkprocesschoose.PdWorkProcessChooseModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdworkprocesschoose'
  });
/**
 * Description: 事业部工序工分表主表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfaci.PdWrkactFaci', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.pdwrkactfaci',
	
	controller: 'pdwrkactfaci',
	viewModel: {
		type: 'pdwrkactfaci'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [{xtype: 'textfield',fieldLabel: '款号',name: 'styleNo',maxLength: 20,
	                enforceMaxLength: true},
			{xtype : 'textfield',fieldLabel : '型体',name : 'modelNo',maxLength: 20,
                   enforceMaxLength: true},
			{xtype : 'textfield',fieldLabel : '鞋类',name : 'categoryNo',maxLength: 20,
	               enforceMaxLength: true},
	        {xtype : 'extcombox',fieldLabel : '工分表类别',name : 'wrkactType',maxLength: 20,
	                displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                    displaymember: 'itemName',
                    valuemember: 'itemCode',
	                enforceMaxLength: true}
			],
			
			gridColumns: [
						//{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false}},
						//{dataIndex: 'billNo', text: '单据编号', editor: {allowBlank: false}},
						{dataIndex: 'wrkactNo', text: '工序工分表编号',width:150,hidden:true},
						{   dataIndex: 'wrkactType',
                            text: '工分表类别',
                            xtype: 'bllookupedit',
                            displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
                            displaymember: 'itemName',
                            valuemember: 'itemCode'
                         },
						{dataIndex: 'modelNo', text: '型体'},
						{dataIndex: 'styleNo', text: '款号'},
						{dataIndex: 'categoryNo', text: '鞋类'},
						{dataIndex: 'versionNo', text: '版本号'},
						{dataIndex: 'isoNo', text: '表号'},
						//{dataIndex: 'billStatus', text: '状态'},
						{dataIndex: 'modifier', text: '修改人'},
						{dataIndex: 'modifyTime', text: '修改时间',width:200},
					],
					
					billStatusUrl:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=pd_bill_status',
					gridModel:'Hc_pd.model.PdWrkactFaci',
					gridLoadUrl : Hc.pdsPath + 'pd_wrkact_faci/list.json',
					dtlName:'pdwrkactfacidtl',
				   	gridHasMark:false,
				   	gridHasCreator:false,
				   	gridHasModifier:false,
				   	gridHasAuditor:false,
				   	gridHasBillNo:false,					
					showModel:'selftab',
					billStatusText:'工分表状态',
					billNoText:'工分表编号'
					
		});
		me.callParent();
	}
});

/**
 * Description: 事业部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfaci.PdWrkactFaciController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.pdwrkactfaci',
    init:function()
    {
		var me = this,
        objList = me.getObjList();
    	me.callParent();
    	objList.btnAdd.setVisible(false);
    },
  });
/**
 * Description: 事业部工序工分表主表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactfaci.PdWrkactFaciModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.pdwrkactfaci'

  });
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

/**
 * Description: 事业部工序工分表工序从表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtlController', {
    extend: 'Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlController',
    alias: 'controller.pdwrkactfacidtl',
    oldWorkProcessCode: '',
    oldMaterialNo:'',
    init:function()
    {
    	var me=this;
    	me.callParent();
    	//上面按钮控制
        var its = me.lookupReference('billtoolbar').items;
        for(var i=0;i<its.length;i++){
                var it = its.getAt(i);
                it.setVisible(it.itemId=='btnBillPrev'||it.itemId=='btnBillNext'||
                			  it.itemId=='btnBillSave'||it.itemId=='btnBillAudit'||
                			  it.itemId=='btnBillBack');
        }    	
        //中间按钮控制
        var items = me.lookupReference('commontoolbar').items;
        for(var i=0;i<items.length;i++){
                var item = items.getAt(i);
            item.setVisible(item.itemId=='btnOther1'||item.itemId=='btnOther2'||
            				item.itemId=='btnCancel');
        }
        
    },
    
    setStatusText: function (record) {
        var me = this,
        objList = me.getObjList();
        me.callParent(arguments);
        var status = record.get('billStatus');
        if(status===5){
        	objList.btnBillAudit.setText('释放');
        	objList.btnBillAudit.setDisabled(false);
        }
        else if(status===45){
        	objList.btnBillAudit.setText('取消释放');
        	objList.btnBillAudit.setDisabled(false);
        }
        else if(status===50){
        	objList.btnBillAudit.setText('待引用');
        	objList.btnBillAudit.setDisabled(true);
        }
        else{
        	objList.btnBillAudit.setText('已引用');
        	objList.btnBillAudit.setDisabled(true);
        }
    },
    
    /*上单*/
    onBtnBillPrevClick: function (btn) {
        var me = this;
        me.getWorkGroupStore();
        me.callParent(arguments);
    },

    /*下单*/
    onBtnBillNextClick: function (btn) {
        var me = this;
        me.getWorkGroupStore();
        me.callParent(arguments);
    },
    /*重新装载(转移)作业组下拉框数据源*/
    getWorkGroupStore: function(){
    	var me = this,
    	objs = me.getObjList();
    	var columns=me.getObjList().mastergrid.columns;
    	Ext.each(columns,function(column){
    		if(column.dataIndex==='workGroupCode'||
    		   column.dataIndex==='toWorkGroupCode'){
    			var store=column.getEditor().store;
    			delete store.proxy.extraParams['workGroupType'];
    			store.load();
    		}
    		});
    },
    
    /*通过当前物料小类联动(转移)作业组*/
    onGridBeforeEdit: function (sender, e) {
    	if (this.gridCannotEditKeyField(e) === false) return false;
    	if(e.field == 'toWorkGroupCode'||e.field == 'workGroupCode') {
        	var me=this,
        	record = e.record,
        	objList = me.getObjList(),
        	store=e.column.getEditor().store;
    		var newWrkactType=me.lookupReference('wrkactType').getValue();
    		var oldWrkactType= store.proxy.extraParams['workGroupType'];
    		if(newWrkactType!=oldWrkactType){
        		var cellValue=record.get(e.field);
            	store.proxy.extraParams.workGroupType=newWrkactType;
    			store.on("load", function() {
    				e.column.getEditor().setValue(cellValue);
    				});        	
            	store.load();
    		}
       }  
    }
  });
/**
 * Description: 事业部工序工分表工序从表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.pdwrkactfacidtl'

  });
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

/**
 * Description: 事业部工序工分表成品关系表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRelController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.pdwrkactfacirel'
  });
/**
 * Description: 事业部工序工分表成品关系表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-05 10:10:34
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRelModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.pdwrkactfacirel'

  });
/**
 * Description: 本部工序工分表主表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmain.PdWrkactMain', {
	extend: 'Hc_Common.view.BaseBillListPage',
	alias: 'widget.pdwrkactmain',
	
	controller: 'pdwrkactmain',
	viewModel: {
		type: 'pdwrkactmain'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
							{xtype : 'textfield',fieldLabel : '款号',name : 'styleNo'},
							{xtype : 'textfield',fieldLabel : '型体',name : 'modelNo'},
							{xtype : 'textfield',fieldLabel : '鞋类',name : 'categoryNo'},
							{
								xtype : 'extcombox',
								fieldLabel : '工分表类别',
								name : 'wrkactType',
								displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
			                    displaymember: 'itemName',
			                    valuemember: 'itemCode'},
			              ],
			gridColumns: [
							{dataIndex: 'lineId', text: '行id(主键)', editor: {allowBlank: false},hidden:true},
							//{dataIndex: 'billNo', text: '单据编号',hidden:true},
							{dataIndex: 'wrkactNo', text: '工序工分表编号',width:140,hidden:true},
							{
								dataIndex: 'wrkactType', 
								text: '工分表类别', 
								xtype:'bllookupedit',
								displayvalue: Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=workshop_type',
			                    displaymember: 'itemName',
			                    valuemember: 'itemCode'
								//displayvalue:'0=面部:1=底部:2=底料:3=中底',
							},
							{dataIndex: 'modelNo', text: '型体'},
							{dataIndex: 'styleNo', text: '款号'},
							{dataIndex: 'categoryNo', text: '鞋类'},
							{dataIndex: 'versionNo', text: '版本号'},
							{dataIndex: 'isoNo', text: '表号'},
							{dataIndex: 'billStatus', text: '状态',hidden:true},
							{dataIndex: 'creator', text: '创建者'},
							{dataIndex: 'createTime', text: '创建时间'},
							{dataIndex: 'modifier', text: '修改者'},
							{dataIndex: 'modifyTime', text: '修改时间'},
							{dataIndex: 'auditor', text: '审核人'},
							{dataIndex: 'auditTime', text: '审核时间'},
							{dataIndex: 'billStatusName', text: '工分表状态'},
							{dataIndex: 'remarks', text: '备注'},
						],
			gridModel: 'Hc_pd.model.PdWrkactMain',
			gridLoadUrl: Hc.pdsPath + 'pd_wrkact_main/list.json',
			billStatusUrl:Hc.mdmPath + 'bas_dict/getbasdictcombo.json?dictCode=pd_bill_status',
			dtlName:'pdwrkactmaindtl',
		   	gridHasMark:false,
		   	gridHasCreator:false,
		   	gridHasModifier:false,
		   	gridHasAuditor:false,
		   	gridHasBillNo:false,
			showModel:'selftab',
			billStatusText:'工分表状态',
			billNoText:'工分表编号'
			
		});
		me.callParent();
	}
});

/**
 * Description: 本部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmain.PdWrkactMainController', {
    extend: 'Hc_Common.view.BaseBillListPageController',
    alias: 'controller.pdwrkactmain',
    init:function(){
        var me = this;
        me.callParent(arguments);
        var grid = me.getObjList().mastergrid;
        var columns = grid.columns;
        Ext.Array.each(columns,function(column){
                if(column.dataIndex == 'billNo')
                        column.text = '工分表编号';
                if(column.dataIndex == 'billStatus')
                		column.text = '工分表状态';
        })
  /*      var commonsearch = me.lookupReference('commonsearch');
        var items = commonsearch.items;
        Ext.Array.each(items,function(item){
                if(item.fieldLabel == 'billNo')
                        item.name = '不叫单据编号'；
        });*/
    }
    /*gridSelectionChange:function (sender, e){
    	 var me= this;
    	 var form = me.getObj('commonsearch');
    	 var commonsearch = me.lookupReference('commonsearch');
         var items = commonsearch.items;
         Ext.Array.each(items,function(item){
                 if(item.fieldLabel == 'billNo'){
                	 item.name = '不叫单据编号';
                 }
                         
         })
    }*/
  });
/**
 * Description: 本部工序工分表主表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactmain.PdWrkactMainModel', {
    extend: 'Hc_Common.view.BaseBillListPageModel',
    alias: 'viewmodel.pdwrkactmain'
  });
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


/**
 * Description: 本部工序工分表主表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialogController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdwrkactmaindialog',
    init:function()
    {
    	var me=this;
    	me.callParent();
        //按钮控制
        var items = me.lookupReference('commontoolbar').items;
        for(var i=0;i<items.length;i++){
        	var item = items.getAt(i);
        	//item.setVisible(item.itemId=='btnOther1'||item.itemId=='btnOther2');
        	item.setVisible(item.itemId=='btnSearch');         	
        }
    }
  });
/**
 * Description: 本部工序工分表主表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactmaindialog.PdWrkactMainDialogModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdwrkactmaindialog'
  });
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

/**
 * Description: 本部工序工分表工序从表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlController', {
    extend: 'Hc_Common.view.BaseBillDetailPageController',
    alias: 'controller.pdwrkactmaindtl',
    setCommonToobar:function(objlist) {
		if (!objlist || objlist.length < 1)return;
        objlist.btnSearch.setVisible(false);
        objlist.btnExport.setVisible(false);
        objlist.btnPrint.setVisible(true);
        objlist.btnOther.setVisible(false);
        objlist.btnSave.setVisible(false);
        
       /* objlist.btnAdd.setVisible(true);
        objlist.btnAdd.setText('增加物料');
        objlist.btnAdd.setDisabled(true);
        
        objlist.btnDelete.setText('删除物料/替代表');
        objlist.btnDelete.setVisible(true);
        objlist.btnDelete.setDisabled(true);*/
        objlist.btnPrint.setText('添加半产品');  
        objlist.btnPrint.setDisabled(false)
        
		objlist.btnOther1.setVisible(true);
		objlist.btnOther1.setText('上移');
		objlist.btnOther1.setDisabled(false);
		
		objlist.btnOther2.setVisible(true);
		objlist.btnOther2.setText('下移');
		objlist.btnOther2.setDisabled(false);
		
		objlist.btnOther3.setVisible(true);
		objlist.btnOther3.setText('工序选择');
		objlist.btnOther3.setDisabled(false);
		
		objlist.btnOther4.setVisible(true);
		objlist.btnOther4.setText('复制');
		objlist.btnOther4.setDisabled(false);

		objlist.btnOther5.setVisible(true);
		objlist.btnOther5.setText('工序移动');
		objlist.btnOther5.setDisabled(false);
			
        for (var i = 3; i < 7; i ++) {
            var sp = objlist['commontoolsp'+i];
            if (sp) {
                sp.setVisible(false);
            }
        }
    },
    //行选择
    gridSelectionChange:function (sender, e){
    	this.callParent(arguments);
    	var objs = this.getObjList();
    	var status = objs.commonbill.store.getAt(0).get('billStatus');
    	if (status>=40){
    		objs.btnPrint.setDisabled(true);
    	}
    },
    
    //上移
    onBtnOther1:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		
		var record=records[0];
		var lineId=record.get("lineId");
		var curIndex= store.findExact("lineId", lineId);//当前行索引
		var preIndex=curIndex-1;//上一行索引
		if(curIndex==0){//第一行数据
			return;
		}
		var preRecord=store.getAt(preIndex);//获取上一行数据
		me.onDataMove(me, record, preRecord);
    },
    //下移
    onBtnOther2:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		
		var record=records[0];
		var lineId=record.get("lineId");		
		var curIndex= store.findExact("lineId", lineId);//当前行索引
		var preIndex=curIndex+1;//下一行索引
		
		if(curIndex + 1 >=datas.length){//最后一行数据
			return;
		}
		
		var nextRecord=store.getAt(preIndex);//获取上一行数据
		me.onDataMove(me,record,nextRecord);		
    },
    //工序移动
    onBtnOther5:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        
        var objGrid = me.workObject;
        if(objGrid.viewModelKey!='mastergrid'){
        	return;
        }
        
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();//获取选中行
		var datas=store.getData();
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }  
        var record=records[0];
        var workProcessCode=record.get("workProcessCode");
        var orderNo=record.get("orderNo");
        var win=Ext.create('Ext.window.Window', {
            title: '请输入要移动的目标序号:',
            height: 150,
            width: 400,
            layout: 'form',
            modal:true,
            resizable:false,
            items:[{
                xtype:'form',
                layout: {
                	type: 'column',
                	columns:1
                },
                items:[{
                	columnWidth:1,
                	xtype: 'label',
                	text: "请输入工序编码为["+workProcessCode+"]序号为["+orderNo+"]的目标序号:"
                },{
                	columnWidth:0.98,
                	xtype : 'textfield',
                	hideLabel: true,
                	id:"orderNo",
                	name:"orderNo",
                	reference: 'orderNo',
                	allowBlank:false
                }],
            }],
            buttons:[{
                text : '确定',  
                handler : function(btn){
                    if(!(btn.up('window').down('form').isValid())) return;
                    var orderNo=btn.up('window').down('form').getComponent("orderNo").getValue();
                    me.onMoveOrderNo(orderNo,me,win);
                }
            },{
                text : '取消',
                handler : function(){  
                    win.close();  
                }
            }],
            listeners: {
                show: function (me,eOpts ) {
                }
            }
        });
		win.show();
    },
    //工序移动方法
    onMoveOrderNo:function(orderNo,me,win){
    	var me=this;
    	var objs = me.getObjList();
        if (!objs) return;
        
        var objGrid = me.workObject;
        if(objGrid.viewModelKey!='mastergrid'){
        	return;
        }
        var store = objs.mastergrid.store; //工序表的数据
		var records=objs.mastergrid.getSelection();//获取选中行
		var datas=store.getData();
		
		if(datas.length<=1){
			Hc.alert("至少要有2条数据才能移动");
			return;
		}
		if (records.length > 1) {
			Hc.alert("只能选择一行进行移动!");
        	return;
        }
		if (records.length < 1) {
			Hc.alert("没有选择移动的数据!");
        	return;
        }
		var record=records[0];
		var curOrderNo=record.get("orderNo");
		var toOrderNo=parseInt(orderNo);
		var curIndex= store.findExact("orderNo", curOrderNo);//当前行索引
		var toIndex= store.findExact("orderNo", toOrderNo);//目标行索引
		if(toIndex<0){
			Hc.alert("没有找到对应序号的数据,请输入正确的序号");
			return;
		}
		var toRecord=store.getAt(toIndex);//获取目标行数据
		me.onDataMove(me,record,toRecord);		
    	win.close();
    },
    
    //上移、下移、移动公共方法
    onDataMove:function(me,record,toRecord){
    	//获取当前行数据
		var curWorkProcessCode=record.get("workProcessCode");
		var curWorkProcessName=record.get("workProcessName");
		var curDescription=record.get("description");
		var curWorkValue=record.get("workValue");
		var curWorkGroupCode=record.get("workGroupCode");
		var curUnitNo=record.get("unitNo");
		var curOrderNo=record.get("orderNo");
		var curStandard=record.get("standard");
		var curFuncRelation=record.get("funcRelation");
		var curAliasName=record.get("aliasName");
		
		//获取目标行数据	
		var toWorkProcessCode=toRecord.get("workProcessCode");
		var toWorkProcessName=toRecord.get("workProcessName");
		var toDescription=toRecord.get("description");
		var toWorkValue=toRecord.get("workValue");
		var toWorkGroupCode=toRecord.get("workGroupCode");
		var toUnitNo=toRecord.get("unitNo");
		var toOrderNo=toRecord.get("orderNo");
		var toStandard=toRecord.get("standard");
		var toFuncRelation=toRecord.get("funcRelation");
		var toAliasName=toRecord.get("aliasName");
		
		//互换
		record.set("workProcessCode",toWorkProcessCode);
		toRecord.set("workProcessCode",curWorkProcessCode);
		
		record.set("workProcessName",toWorkProcessName);
		toRecord.set("workProcessName",curWorkProcessName);
				
		record.set("description",toDescription);
		toRecord.set("description",curDescription);
		
		record.set("workValue",toWorkValue);
		toRecord.set("workValue",curWorkValue);
		
		record.set("workGroupCode",toWorkGroupCode);
		toRecord.set("workGroupCode",curWorkGroupCode);
		
		record.set("unitNo",toUnitNo);
		toRecord.set("unitNo",curUnitNo);
		
		record.set("standard",toStandard);
		toRecord.set("standard",curStandard);
		
		record.set("funcRelation",toFuncRelation);
		toRecord.set("funcRelation",curFuncRelation);
		
		record.set("aliasName",toAliasName);
		toRecord.set("aliasName",curAliasName);
		
		//事业部工序工分-转移作业组
		if(!record.get("toWorkGroupCode")){
			record.set("toWorkGroupCode",record.get("toWorkGroupCode"));
			toRecord.set("toWorkGroupCode",toRecord.get("toWorkGroupCode"));	
		}
    },
    
    //复制
    onBtnOther4:function(btn){
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var datas=store.getData();
		if(datas.length>0){
			Hc.alert("请删除原有工序并保存后在再行复制");
			return;
		}
    	me.showWorkProcessChooseDialog('copy');
    },

	 //添加半成品
    onBtnPrintClick: function (btn) {
    	var me=this;
    	this.callParent(arguments);
    	var objs = me.getObjList();
        if (!objs) return;
        var store = objs.mastergrid.store; //工序表的数据
		var datas=store.getData();
		if(datas.length>0){
			/*Hc.alert("请删除原有工序并保存后在再行复制");
			return;*/
		}
    	me.showWorkProcessChooseDialog('addMaterial');
    },
    
    /*工序选择*/
    onBtnOther3: function (btn) {
    	var me = this;
    	if (!(me.getObj('commonbill').isValid())) return;
    	me.showWorkProcessChooseDialog('select');
    },
    
    showWorkProcessChooseDialog:function(type){
  	  var me = this;
  	  //工序选择
  	  if(type=='select'){
  	  var dtl = {
  	          xtype: 'pdworkprocesschoose',
  	          userRight: me.view.userRight,
  	          moduleRight: me.view.moduleRight,
  	          userCode: me.view.userCode,
  	          userName: me.view.userName
  	      };
	  	 dtl.width = Ext.getBody().getWidth() * 0.8;
	     dtl.height = Ext.getBody().getHeight() * 0.8;
	     me.showInWin(dtl, {winName: 'pdworkprocesschoose', title: '工序选择', showBbar: true});
  	  }
  	  //复制
  	  if(type=='copy'){
  		var dtl = {
                xtype: 'pdwrkactmaindialog',
                userRight: me.view.userRight,
                moduleRight: me.view.moduleRight,
                userCode: me.view.userCode,
                userName: me.view.userName
            };
  		dtl.width = Ext.getBody().getWidth() * 0.8;
        dtl.height = Ext.getBody().getHeight() * 0.8;
        me.showInWin(dtl, {winName: 'pdwrkactmaindialog', title: '复制', showBbar: true});
  	  } 
  	  //添加半成品
  	  if(type=='addMaterial'){
  		var dtl = {
                xtype: 'pdwrkactmainrel',
                userRight: me.view.userRight,
                moduleRight: me.view.moduleRight,
                userCode: me.view.userCode,
                userName: me.view.userName
            };
  		dtl.width = Ext.getBody().getWidth() * 0.8;
        dtl.height = Ext.getBody().getHeight() * 0.8;
        me.showInWin(dtl, {winName: 'pdwrkactmainrel', title: '添加半成品', showBbar: true});
  	  } 
    },
    
    /**弹出框中的确认按钮事件*/
    onWinConfirmClick: function (btn) {
  	  var me=this;		
  	  var objlist = me.getObjList();
  	  
  	  var win = btn.up('window');
  	  var form = win.down('form');
  	  var val = form.getValues();
  	  if(!form.isValid()) return;
  	  if(win.winName=="pdworkprocesschoose"){
  		  
	  	  me.workObject=objlist['mastergrid'];  	  
	  	  var gridStore=me.workObject.getStore();
	  	  var gridStoreCount=gridStore.count();
	  	    	  
	  	  var chooseGrid1Store= Ext.getCmp("workProcessChooseGrid1").getStore();
	  	  
	  	  for(var i =0;i<chooseGrid1Store.getCount();i++){
	  		var model = gridStore.getModel();
	
	  		var item = chooseGrid1Store.getAt(i);
	  		var startRowIndex=gridStoreCount;
	        var newObj = model.create({_flag: 'A'});
	        newObj.set('billNo', me.view.billNo);
	        if (me.workObject.hasOrderNo) {
	            var ds = me.workObject.store;
	            var orderNo = (ds.max('orderNo') || 0) + 1;
	            newObj.set('orderNo', orderNo);
	        }        
	  		newObj.set('workProcessCode', item.get('workProcessCode'));
	  		newObj.set('workProcessName', item.get('workProcessName'));
	  		newObj.set('description', item.get('description'));
	  		newObj.set('workValue', item.get('workValue'));
	  		newObj.set('workGroupCode', item.get('workGroupCode'));
	  		newObj.set('unitNo', item.get('units'));
	  		newObj.set('standard', item.get('workValue'));
	  		gridStore.add(newObj);
		    me.workObject.getSelectionModel().select(gridStoreCount);
	  	  
	  		gridStoreCount=gridStoreCount+1;
	  	  }
	  	btn.up('window').close();
	  }
  	if(win.winName=="pdwrkactmaindialog"){
  		var dialogGrids= Ext.getCmp("PdWrkactMainDialogGrid").getSelection();
  		if(dialogGrids.length>1) return;
	  	var dailogGrid=dialogGrids[0];
	  	var wrkactNo=dailogGrid.get('wrkactNo');
	  	me.workObject=objlist['mastergrid'];
	  	Ext.Ajax.request({            
		     url:  Hc.pdsPath + 'pd_wrkact_main/getDtlRel.json',    //请求地址    
		     //提交参数组
		     params: {       
		    	 wrkactNo:wrkactNo             
		     }, 
		     //成功时回调       
		     success: function(response, options) {   
		        //获取响应的字符串
		    	var result = JSON.parse(response.responseText);
				var storedtl = objlist['mastergrid'].store;
				var storerel=objlist.grid1.store;
				
		    	Ext.each(result.listdtl,function(record){ 
		    		var model = storedtl.getModel();
			        var newObj = model.create({_flag: 'A'});
			        newObj.set('workProcessCode', record.workProcessCode);
			        newObj.set('workProcessName', record.workProcessName);
			        newObj.set('description', record.description);
			        newObj.set('workValue', record.workValue);
			        newObj.set('orderNo', record.orderNo);
			        newObj.set('workGroupCode', record.workGroupCode);
			        newObj.set('unitNo', record.unitNo);
			        newObj.set('standard', record.standard);
			        newObj.set('funcRelation', record.funcRelation);
			        newObj.set('aliasName', record.aliasName);
			  		storedtl.add(newObj);
		    	}); 
		    	
		    	Ext.each(result.listrel,function(record){ 
		    		var model = storerel.getModel();
			        var newObj = model.create({_flag: 'A'});
			        newObj.set('materialNo', record.materialNo);
			        storerel.add(newObj);
		    	}); 
		    	
		    	btn.up('window').close();
		    }
		});
  	}
  	
  	if(win.winName=="pdwrkactmainrel"){
  		me.workObject=objlist['grid1'];  	  
  		var gridStore=me.workObject.getStore();
  		var gridStoreCount=gridStore.count();
  		var records= Ext.getCmp("PdWrkactMainRelGrid").getSelection();
  		if(records.length<=0) return;
  		var styleNo='';//款号
  		var modelNo='';//型体
  		for(var i =0;i<records.length;i++){
  			if(i==0){
  				styleNo=records[i].get('styleNo');
  				modelNo=records[i].get('modelNo');
  			}
  			else{
  				if(records[i].get('styleNo')!=styleNo||records[i].get('modelNo')){
  					Hc.alert('请选择相同款号、型体的物料');
  					return;
  				}
  				else{
  					styleNo=records[i].get('styleNo');
  	  				modelNo=records[i].get('modelNo');
  				}
  			}
  		}
  		for(var i =0;i<records.length;i++){
  			var model = gridStore.getModel();
  			var startRowIndex=gridStoreCount;
  			var newObj = model.create({_flag: 'A'});
  			newObj.set('billNo', me.view.billNo);		
  			newObj.set('wrkactNo', records[i].get('wrkactNo'));
  			newObj.set('materialNo', records[i].get('materialNo'));
  			newObj.set('styleNo', records[i].get('styleNo'));
  			newObj.set('modelNo', records[i].get('modelNo'));

  			gridStore.add(newObj);
  			me.workObject.getSelectionModel().select(gridStoreCount); 	  
  			gridStoreCount=gridStoreCount+1;
  		}
  		btn.up('window').close();
  	}  
  	  //me.callParent(arguments);
    },
    
    //编码带出名称
    checkKeyValue:function(e){
    	//onGridAfterEdit: function (editor, e) {
    	 var me = this;
		 me.callParent(arguments);
		 var record = e.record;
		 if(e.field='workProcessCode'){
			 var workProcessCode=record.get('workProcessCode');
			 if(e.value != e.originalValue){
			   Hc.callServer({
				   url: Hc.pdsPath+'pd_work_process/list.json',
				   params: {
					   'workProcessCode':workProcessCode
				   },
				   success: function(response) {
					   var ob = Ext.decode(response.responseText);
					   var length=ob.list.length;
					   if(length>0){
						   var workProcessName=ob.list[0].workProcessName;
						   var workCateCode=ob.list[0].workCateCode;
						   var units=ob.list[0].units;
						   var workValue=ob.list[0].workValue;
						   var description=ob.list[0].description;
						   if(workProcessName)
						   {
							   record.set('workProcessName',workProcessName);
							   record.set('workCateCode',workCateCode);
							   record.set('units',units);
							   record.set('workValue',workValue);
							   record.set('description',description);
						   }
					   }
					   else{
						   record.set('workProcessName','');
						   record.set('workCateCode','');
						   record.set('description','');
					   }
				   }
			   }
			   )
			 }
		   }
		 
		 if(e.field='materialNo'){
			 var materialNo=record.get('materialNo');
			 var grid=me.workObject;
			 var datas=grid.store.getData();
			 if(e.value != e.originalValue){
				 Hc.callServer({
					 url: Hc.mdmPath + 'bas_material/list.json',
					 params: {
						 'materialNo':materialNo
					 },
					 success: function(response) {
						 var ob = Ext.decode(response.responseText);
						 var length=ob.list.length;
						 if(length>0){
							 var materialName=ob.list[0].materialName;
							 var styleNo=ob.list[0].styleNo;
							 var modelNo=ob.list[0].modelNo;
							 if(materialName)
							 {
								 for(var i=0;i<datas.length;i++){
									 
								 }
								 record.set('materialName',materialName);
								 record.set('styleNo',styleNo);
								 record.set('modelNo',modelNo);
							 }
						 }
						 else{
							 record.set('materialNo', '');
							 record.set('materialName','');
							 record.set('styleNo','');
							 record.set('modelNo','');
						 }
					 }
				 }
				 )
			 }
		 }
    },
    //保存前
    beforeSave: function (data) {
    	this.callParent(arguments);
    	var me = this;
    	if(me.lookupReference('modelNo')){
	    	var objlist= me.getObjList();
	    	me.workObject=objlist['grid1'];
		  	var gridStore=me.workObject.store;
		  	var records=gridStore.getData();
		  	var styleNo=null;//款号
	  		var modelNo=null;//型体
		  	if(records.length>0){
		  		for(var i=0;i<records.length;i++){
		  			if(i==0){
		  				styleNo=records.items[i].get('styleNo');
		  				modelNo=records.items[i].get('modelNo');
		  			}
		  			else{
		  				if(records.items[i].get('styleNo')!=styleNo||records.items[i].get('modelNo')){
		  					Hc.alert('存在不相同款号、型体的物料，请重新编辑');
		  					return false;
		  				}
		  				else{
		  					styleNo=records.items[i].get('styleNo');
		  	  				modelNo=records.items[i].get('modelNo');
		  				}
		  			}		  			
		  		}
		  		var styleNo=records.items[0].get('styleNo');
		  		var modelNo=records.items[0].get('modelNo');
		  		me.lookupReference('modelNo').setValue(modelNo);
		  	}
    	}
    	return true;
    },
    setStatusText: function (record) {
        this.callParent(arguments);
        var me=this;
        var objs = me.getObjList();
        
	    var status = record.get('billStatus');
	    if (status==40){
	    	objs.btnBillAudit.setText("反审核");
	    	objs.btnBillAudit.setVisible(true);
	    	objs.btnBillAudit.setDisabled(false);
	    	objs.btnOther1.setDisabled(true);
	    	objs.btnOther2.setDisabled(true);
	    	objs.btnOther3.setDisabled(true);
	    	objs.btnOther4.setDisabled(true);
	    	objs.btnOther5.setDisabled(true);
	    	objs.btnPrint.setDisabled(true);
	    	objs.btnAdd.setDisabled(true);
	    }else if(status<40){
	    	objs.btnBillAudit.setText("审核");
	    	objs.btnOther1.setDisabled(false);
	    	objs.btnOther2.setDisabled(false);
	    	objs.btnOther3.setDisabled(false);
	    	objs.btnOther4.setDisabled(false);
	    	objs.btnOther5.setDisabled(false);
	    	objs.btnPrint.setDisabled(false);
	    	objs.btnAdd.setDisabled(false);
	    }else{
	    	objs.btnBillAudit.setText("释放");
	    	objs.btnOther1.setDisabled(true);
	    	objs.btnOther2.setDisabled(true);
	    	objs.btnOther3.setDisabled(true);
	    	objs.btnOther4.setDisabled(true);
	    	objs.btnOther5.setDisabled(true);
	    	objs.btnPrint.setDisabled(true);
	    	objs.btnAdd.setDisabled(true);
	    }	    
    },
  });
/**
 * Description: 本部工序工分表工序从表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:16
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtlModel', {
    extend: 'Hc_Common.view.BaseBillDetailPageModel',
    alias: 'viewmodel.pdwrkactmaindtl'
  });
/**
 * Description: 本部工序工分表成品关系表(default)
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:17
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmainrel.PdWrkactMainRel', {
	extend: 'Hc_Common.view.BaseSimplePage',
	alias: 'widget.pdwrkactmainrel',
	
	controller: 'pdwrkactmainrel',
	viewModel: {
		type: 'pdwrkactmainrel'
	},
	initComponent: function () {
		var me= this;
		Ext.apply(me, {
			searchItems: [
			              {
			            	  xtype:'textfield',  fieldLabel:'物料编号',name:'materialNo'
			              },
			              { xtype:'textfield',  fieldLabel:'款号',name:'styleNo'},
			              { xtype:'textfield',  fieldLabel:'型体',name:'modelNo'}
			              ],
			              gridColumns: [
			                            {dataIndex: 'lineId', text: '行id(主键)',hidden:true},
			                            {dataIndex: 'materialNo', text: '物料编号'},
			                            {dataIndex: 'materialName', text: '物料名称'},
			                            {dataIndex: 'modelNo', text: '型体'},
			                            {dataIndex: 'styleNo', text: '款号'},
			                            ],
			                            gridHasMark:false,
			                            gridHasCreator:false,
			                            gridHasModifier:false,
			                            gridHasAuditor:false,
			                            gridModel: 'Hc_pd.model.PdWrkactMainRel',
			                            gridLoadUrl: Hc.mdmPath + 'bas_material/list.json?materialType=0',

		});
		Ext.apply(me.grid, { id: 'PdWrkactMainRelGrid'});		
		me.callParent();
	}
});

/**
 * Description: 本部工序工分表成品关系表Controller
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:17
 * @version 1.0.0
 */
Ext.define('Hc_pd.view.pdwrkactmainrel.PdWrkactMainRelController', {
    extend: 'Hc_Common.view.BaseSimplePageController',
    alias: 'controller.pdwrkactmainrel',
    init:function()
    {
    	var me=this;
    	me.callParent();
        //按钮控制
        var items = me.lookupReference('commontoolbar').items;
        for(var i=0;i<items.length;i++){
        	var item = items.getAt(i);
        	//item.setVisible(item.itemId=='btnOther1'||item.itemId=='btnOther2');
        	item.setVisible(item.itemId=='btnSearch');         	
        }
    }
  });
/**
 * Description: 本部工序工分表成品关系表Model
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     caod
 * @date:  2015-05-05 16:15:17
 * @version 1.0.0
 */ 
Ext.define('Hc_pd.view.pdwrkactmainrel.PdWrkactMainRelModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.pdwrkactmainrel'
 
  });
