package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWorkProcessCategory;
import com.hc.scm.pd.service.PdWorkProcessCategoryService;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:29:59
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_work_process_category")
public class PdWorkProcessCategoryController extends BaseCrudController<PdWorkProcessCategory> {
    @Resource
    private PdWorkProcessCategoryService pdWorkProcessCategoryService;

    @Override
    public BaseCrudService init() {
        return pdWorkProcessCategoryService;
    }
    @RequestMapping("/checkDelete.json")
    @ResponseBody
    public String checkDeleteCategory(HttpServletRequest req, Model model) throws Exception{
		if(StringUtils.isEmpty(req.getParameter("workCateCode"))){
			throw new Exception("没有得到当前网格行的工序类别编号！");
		}
		String workCateCode = String.valueOf(req.getParameter("workCateCode"));
    	return pdWorkProcessCategoryService.checkDeleteCate(workCateCode);
    }
    
}