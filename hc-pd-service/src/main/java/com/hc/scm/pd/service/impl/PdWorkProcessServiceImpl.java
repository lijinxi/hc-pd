package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.PdWorkProcessDao;
import com.hc.scm.pd.service.PdWorkProcessService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:31:07
 * @version 1.0.0
 */
@Service("pdWorkProcessService")
class PdWorkProcessServiceImpl extends BaseCrudServiceImpl implements PdWorkProcessService {
    @Resource
    private PdWorkProcessDao pdWorkProcessDao;

    @Override
    public BaseCrudDao init() {
        return pdWorkProcessDao;
    }

	@Override
	public String checkDeleteWorkProcess(int processId) {
		int count = pdWorkProcessDao.checkDeleteWorkProcess(processId);
		return count>0 ? "该行节点存在子节点，不允许删除！": "";
	}
    
}