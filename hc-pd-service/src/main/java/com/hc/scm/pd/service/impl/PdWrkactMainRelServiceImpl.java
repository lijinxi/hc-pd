package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.PdWrkactMainRelDao;
import com.hc.scm.pd.service.PdWrkactMainRelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
@Service("pdWrkactMainRelService")
class PdWrkactMainRelServiceImpl extends BaseCrudServiceImpl implements PdWrkactMainRelService {
    @Resource
    private PdWrkactMainRelDao pdWrkactMainRelDao;

    @Override
    public BaseCrudDao init() {
        return pdWrkactMainRelDao;
    }
}