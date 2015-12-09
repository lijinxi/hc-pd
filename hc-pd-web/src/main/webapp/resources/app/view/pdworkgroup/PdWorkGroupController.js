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