package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdWrkactMainDtlDao;
import com.hc.scm.pd.dao.mapper.PdWrkactMainDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
@Repository("pdWrkactMainDtlDao")
class PdWrkactMainDtlDaoImpl extends BaseCrudDaoImpl implements PdWrkactMainDtlDao {
    @Resource
    private PdWrkactMainDtlMapper pdWrkactMainDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWrkactMainDtlMapper;
    }
}