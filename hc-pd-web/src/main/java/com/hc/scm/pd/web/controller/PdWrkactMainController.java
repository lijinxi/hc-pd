package com.hc.scm.pd.web.controller;

import java.util.HashMap;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.exception.ValidException;
import com.hc.scm.pd.dao.entity.PdWrkactMain;
import com.hc.scm.pd.service.PdWrkactMainService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_wrkact_main")
public class PdWrkactMainController extends BaseCrudController<PdWrkactMain> {
    @Resource
    private PdWrkactMainService pdWrkactMainService;

    @Override
    public BaseCrudService init() {
        return pdWrkactMainService;
    }
    
	@RequestMapping("/getDtlRel.json")
    @ResponseBody
    public Map<String,Object> getDtlRel(HttpServletRequest req, Model model) throws Exception {
		Map<String, Object> resultMap =new HashMap<String, Object>();
		if(StringUtils.isEmpty(req.getParameter("wrkactNo"))){
				throw new Exception("请传入工序工分表编号!");
		}
		String wrkactNo = String.valueOf(req.getParameter("wrkactNo"));
		resultMap=pdWrkactMainService.getDtlRel(wrkactNo);
		return resultMap;
	}
}