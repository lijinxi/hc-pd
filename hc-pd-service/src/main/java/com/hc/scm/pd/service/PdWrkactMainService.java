package com.hc.scm.pd.service;

import java.util.Map;

import com.hc.scm.common.base.service.BaseCrudService;

/**
 * Description: 本部工序工分表
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
public interface PdWrkactMainService extends BaseCrudService {
	public Map<String,Object> getDtlRel(String wrkactNo);
}