package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.pd.dao.dal.PdProcessDegreeCoefDao;
import com.hc.scm.pd.service.PdProcessDegreeCoefService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:58
 * @version 1.0.0
 */
@Service("pdProcessDegreeCoefService")
class PdProcessDegreeCoefServiceImpl extends BaseCrudServiceImpl implements PdProcessDegreeCoefService {
    @Resource
    private PdProcessDegreeCoefDao pdProcessDegreeCoefDao;

    @Override
    public BaseCrudDao init() {
        return pdProcessDegreeCoefDao;
    }
}