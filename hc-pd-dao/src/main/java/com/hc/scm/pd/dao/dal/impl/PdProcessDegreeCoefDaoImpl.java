package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdProcessDegreeCoefDao;
import com.hc.scm.pd.dao.mapper.PdProcessDegreeCoefMapper;
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
@Service("pdProcessDegreeCoefDao")
class PdProcessDegreeCoefDaoImpl extends BaseCrudDaoImpl implements PdProcessDegreeCoefDao {
    @Resource
    private PdProcessDegreeCoefMapper pdProcessDegreeCoefMapper;

    @Override
    public BaseCrudMapper init() {
        return pdProcessDegreeCoefMapper;
    }
}