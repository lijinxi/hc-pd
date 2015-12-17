package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.pd.dao.dal.PdWorkProcessCategoryDao;
import com.hc.scm.pd.dao.mapper.PdWorkProcessCategoryMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:29:59
 * @version 1.0.0
 */
@Repository("pdWorkProcessCategoryDao")
class PdWorkProcessCategoryDaoImpl extends BaseCrudDaoImpl implements PdWorkProcessCategoryDao {
    @Resource
    private PdWorkProcessCategoryMapper pdWorkProcessCategoryMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWorkProcessCategoryMapper;
    }

	@Override
	public <ModelType> String checkProcessCategoryNo(String workCateCode) throws DaoException {
		try {
   			return pdWorkProcessCategoryMapper.checkCategoryNo(workCateCode);
   		} catch (Exception e) {
   			throw new DaoException("",e);
   		}
	}
}