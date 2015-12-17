package com.hc.scm.pd.dao.dal;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:29:59
 * @version 1.0.0
 */
public interface PdWorkProcessCategoryDao extends BaseCrudDao {
	public <ModelType> String checkProcessCategoryNo(String workCateCode) throws DaoException;
}