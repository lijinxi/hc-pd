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
	requires: [
		'Hc_pd.model.PdWrkactMainRel',		
		'Hc_pd.view.pdwrkactmainrel.PdWrkactMainRelController',
		'Hc_pd.view.pdwrkactmainrel.PdWrkactMainRelModel'
	],
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
