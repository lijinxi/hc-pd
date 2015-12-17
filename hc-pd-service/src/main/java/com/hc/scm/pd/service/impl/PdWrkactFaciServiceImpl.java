package com.hc.scm.pd.service.impl;

import java.util.Date;
import java.util.List;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.pd.dao.dal.PdWrkactFaciDao;
import com.hc.scm.pd.service.PdWrkactFaciService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:05
 * @version 1.0.0
 */
@Service("pdWrkactFaciService")
class PdWrkactFaciServiceImpl extends BaseCrudServiceImpl implements PdWrkactFaciService {
    @Resource
    private PdWrkactFaciDao pdWrkactFaciDao;

    @Override
    public BaseCrudDao init() {
        return pdWrkactFaciDao;
    }
    
	/**
	 * 释放事业部工序工分表
	 */
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = ServiceException.class)
	@Override
	public <ModelType> void audit(List<ModelType> auditModelList,SystemUser systemUser) {
		if (auditModelList != null && auditModelList.size() > 0) {
			try {
				Date date = new Date();
				for (ModelType mod : auditModelList) {
					CommonUtil.setFieldValue(mod, "auditor", mod.getClass(),systemUser.getUserName());
					CommonUtil.setFieldValue(mod, "auditTime", mod.getClass(),date);
					pdWrkactFaciDao.audit(mod);
				}
			} catch (Exception e) {
				// TODO: handle exception
				throw new ServiceException("释放事业部工序工分表出错了，原因：" + e.getMessage());
			}
		}
	}
}