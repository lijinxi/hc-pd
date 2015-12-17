package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.BlTemplateDao;
import com.hc.scm.pd.service.BlTemplateService;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-10 10:19:03
 * @version 1.0.0
 */
@Service("blTemplateService")
class BlTemplateServiceImpl extends BaseCrudServiceImpl implements BlTemplateService {
    @Resource
    private BlTemplateDao blTemplateDao;

    @Override
    public BaseCrudDao init() {
        return blTemplateDao;
    }
    
    public String test(){
		return "xxxxx组织者";
	}
    
    public String test2(){
		return "xxxxxyyy组织者嘻嘻嘻";
	}
    
    public String test3(){
		return "xxxxxyyyilikeit";
	}
}