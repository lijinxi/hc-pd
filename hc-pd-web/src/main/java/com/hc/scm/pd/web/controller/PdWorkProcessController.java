package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWorkProcess;
import com.hc.scm.pd.service.PdWorkProcessService;
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
 * @date:  2015-04-29 10:31:07
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_work_process")
public class PdWorkProcessController extends BaseCrudController<PdWorkProcess> {
    @Resource
    private PdWorkProcessService pdWorkProcessService;

    @Override
    public BaseCrudService init() {
        return pdWorkProcessService;
    }
    
    /**
     * 验证删除（如存在子节点或被引用等情况则返回对应的信息，否则返回空）
     */
    @RequestMapping("/checkDelete.json")
    @ResponseBody
    public String checkDeleteCategory(HttpServletRequest req, Model model) throws Exception{
		if(StringUtils.isEmpty(req.getParameter("processId"))){
			throw new Exception("没有得到当前网格行的工序编号！");
		}
		String processId = String.valueOf(req.getParameter("processId"));
    	return pdWorkProcessService.checkDeleteWorkProcess(Integer.parseInt(processId));
    }
}