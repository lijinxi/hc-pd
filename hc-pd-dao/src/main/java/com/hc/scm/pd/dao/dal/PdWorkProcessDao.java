package com.hc.scm.pd.dao.dal;

import com.hc.scm.common.base.dal.BaseCrudDao;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:31:07
 * @version 1.0.0
 */
public interface PdWorkProcessDao extends BaseCrudDao {
	public int checkDeleteWorkProcess(int processId);
}