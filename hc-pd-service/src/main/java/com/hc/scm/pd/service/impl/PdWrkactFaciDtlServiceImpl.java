package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.PdWrkactFaciDtlDao;
import com.hc.scm.pd.service.PdWrkactFaciDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed ByBeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 10:28:42
 * @version 1.0.0
 */
@Service("pdWrkactFaciDtlService")
class PdWrkactFaciDtlServiceImpl extends BaseCrudServiceImpl implements PdWrkactFaciDtlService {
    @Resource
    private PdWrkactFaciDtlDao pdWrkactFaciDtlDao;

    @Override
    public BaseCrudDao init() {
        return pdWrkactFaciDtlDao;
    }
}