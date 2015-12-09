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