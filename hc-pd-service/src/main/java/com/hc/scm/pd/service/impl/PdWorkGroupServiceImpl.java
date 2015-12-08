package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.pd.dao.dal.PdWorkGroupDao;
import com.hc.scm.pd.service.PdWorkGroupService;
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
@Service("pdWorkGroupService")
class PdWorkGroupServiceImpl extends BaseCrudServiceImpl implements PdWorkGroupService {
    @Resource
    private PdWorkGroupDao pdWorkGroupDao;

    @Override
    public BaseCrudDao init() {
        return pdWorkGroupDao;
    }
    
    /**
	 * 删除检查，允许删除的话则返回空，否则返回对应的提示信息
	 */
    
	@Override
	public <ModelType> String checkDeleteGroup(String workGroupCode)
			throws ServiceException {
		try {
			String firstGroupNo = pdWorkGroupDao.checkGroupNo(workGroupCode);
			if (firstGroupNo==null || firstGroupNo.isEmpty()){
				return "";
			}else{
				return "该工作组已维护工序不允许删除！";
			}
		} catch (Exception e) {
			throw new ServiceException("检查删除出错\r\n"+e.getMessage(),e);
		}
	}
	

}