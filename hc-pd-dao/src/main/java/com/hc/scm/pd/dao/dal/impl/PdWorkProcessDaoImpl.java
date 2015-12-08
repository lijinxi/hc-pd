package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdWorkProcessDao;
import com.hc.scm.pd.dao.mapper.PdWorkProcessMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:31:07
 * @version 1.0.0
 */
@Repository("pdWorkProcessDao")
class PdWorkProcessDaoImpl extends BaseCrudDaoImpl implements PdWorkProcessDao {
    @Resource
    private PdWorkProcessMapper pdWorkProcessMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWorkProcessMapper;
    }

	@Override
	public int checkDeleteWorkProcess(int processId) {
		return pdWorkProcessMapper.checkDeleteWorkProcess(processId);
	}
    
}