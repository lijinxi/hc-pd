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
	requires: [
		'Hc_pd.model.PdWrkactFaci',
		'Hc_pd.view.pdwrkactfaci.PdWrkactFaciController',
		'Hc_pd.view.pdwrkactfaci.PdWrkactFaciModel'
	],
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
