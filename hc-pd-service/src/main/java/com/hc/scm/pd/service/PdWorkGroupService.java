package com.hc.scm.pd.service;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 13:56:13
 * @version 1.0.0
 */
public interface PdWorkGroupService extends BaseCrudService {
	public <ModelType> String checkDeleteGroup(String workGroupCode) throws ServiceException;
	
}