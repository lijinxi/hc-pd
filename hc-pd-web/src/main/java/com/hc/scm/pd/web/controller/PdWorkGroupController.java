package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWorkGroup;
import com.hc.scm.pd.service.PdWorkGroupService;
import com.fr.stable.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 13:56:13
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_work_group")
public class PdWorkGroupController extends BaseCrudController<PdWorkGroup> {
    @Resource
    private PdWorkGroupService pdWorkGroupService;

    @Override
    public BaseCrudService init() {
        return pdWorkGroupService;
    }
    
    @RequestMapping("/checkDelete.json")
    @ResponseBody
    public String checkDeleteGroup(HttpServletRequest req, Model model) throws Exception{
		if(StringUtils.isEmpty(req.getParameter("workGroupCode"))){
			throw new Exception("没有得到当前网格行的工作组编号！");
		}
		String workGroupCode = String.valueOf(req.getParameter("workGroupCode"));
    	return pdWorkGroupService.checkDeleteGroup(workGroupCode);
    }
}