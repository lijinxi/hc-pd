package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.PdWrkactFaciRelDao;
import com.hc.scm.pd.service.PdWrkactFaciRelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:06
 * @version 1.0.0
 */
@Service("pdWrkactFaciRelService")
class PdWrkactFaciRelServiceImpl extends BaseCrudServiceImpl implements PdWrkactFaciRelService {
    @Resource
    private PdWrkactFaciRelDao pdWrkactFaciRelDao;

    @Override
    public BaseCrudDao init() {
        return pdWrkactFaciRelDao;
    }
}