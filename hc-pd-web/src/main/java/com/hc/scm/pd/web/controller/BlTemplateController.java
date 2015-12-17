package com.hc.scm.pd.web.controller;

import java.util.HashMap;
import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.BlTemplate;
import com.hc.scm.pd.service.BlTemplateService;

import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-10 10:19:03
 * @version 1.0.0
 */
@Controller
@RequestMapping("/bl_template")
public class BlTemplateController extends BaseCrudController<BlTemplate> {
    @Resource
    private BlTemplateService blTemplateService;

    @Override
    public BaseCrudService init() {
        return blTemplateService;
    }
    
    @RequestMapping("/test")
    @ResponseBody
    public Map<String, Object> test(){
    	Map<String,Object> map = new HashMap<String, Object>();
    	//String ret = "xxxxyyyyzzzz";
    	String ret = blTemplateService.test3();
    	ret = "乐土xxxxxxxxxx乐土";
    	map.put("data", ret);
    	return map;
    }
    
    @RequestMapping("/test1")
    @ResponseBody
    public Map<String, Object> test1(){
    	Map<String,Object> map = new HashMap<String, Object>();
    	//String ret = "xxxxyyyyzzzz";
    	String ret = blTemplateService.test();
    	map.put("data", ret);
    	return map;
    }
}