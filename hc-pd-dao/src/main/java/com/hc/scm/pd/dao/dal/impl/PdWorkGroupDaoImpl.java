package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.pd.dao.dal.PdWorkGroupDao;
import com.hc.scm.pd.dao.mapper.PdWorkGroupMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed ByBeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 13:56:13
 * @version 1.0.0
 */
@Service("pdWorkGroupDao")
class PdWorkGroupDaoImpl extends BaseCrudDaoImpl implements PdWorkGroupDao {
    @Resource
    private PdWorkGroupMapper pdWorkGroupMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWorkGroupMapper;
    }
    
    @Override
   	public <ModelType> String checkGroupNo(String workGroupCode) throws DaoException{
   		try {
   			return pdWorkGroupMapper.checkGroupNo(workGroupCode);
   		} catch (Exception e) {
   			throw new DaoException("",e);
   		}
   	}
    
}