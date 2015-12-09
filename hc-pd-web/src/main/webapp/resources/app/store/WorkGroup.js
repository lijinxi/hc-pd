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
