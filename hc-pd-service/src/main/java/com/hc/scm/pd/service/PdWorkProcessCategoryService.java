package com.hc.scm.pd.service;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.exception.ServiceException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:29:59
 * @version 1.0.0
 */
public interface PdWorkProcessCategoryService extends BaseCrudService {
	public <ModelType> String checkDeleteCate(String workCateCode) throws ServiceException;
}