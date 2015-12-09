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
    
    requires: [
       		'Hc_pd.view.bltemplate.BlTemplate',
       		'Hc_pd.view.pdworkprocesscategory.PdWorkProcessCategory',
       		'Hc_pd.view.pdworkgroup.PdWorkGroup',
       		'Hc_pd.view.pdprocessdegreecoef.PdProcessDegreeCoef',
       		'Hc_pd.view.pdworkprocess.PdWorkProcess',
       		'Hc_pd.view.pdwrkactmain.PdWrkactMain',
       		'Hc_pd.view.pdwrkactmaindtl.PdWrkactMainDtl',
       		'Hc_pd.view.pdworkprocesschoose.PdWorkProcessChoose',
       		'Hc_pd.view.pdwrkactmainrel.PdWrkactMainRel',
       		'Hc_pd.view.pdwrkactfaci.PdWrkactFaci',
       		'Hc_pd.view.pdwrkactfacidtl.PdWrkactFaciDtl',
       		'Hc_pd.view.pdwrkactfacirel.PdWrkactFaciRel'
       	],
       	
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
