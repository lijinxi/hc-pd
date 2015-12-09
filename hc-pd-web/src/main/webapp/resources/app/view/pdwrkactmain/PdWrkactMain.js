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
	requires: [
		'Hc_pd.model.PdWrkactMain',		
		'Hc_pd.view.pdwrkactmain.PdWrkactMainController',
		'Hc_pd.view.pdwrkactmain.PdWrkactMainModel'
	],
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
