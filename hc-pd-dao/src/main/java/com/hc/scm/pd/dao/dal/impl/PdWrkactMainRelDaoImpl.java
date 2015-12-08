package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdWrkactMainRelDao;
import com.hc.scm.pd.dao.mapper.PdWrkactMainRelMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yujh
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
@Repository("pdWrkactMainRelDao")
class PdWrkactMainRelDaoImpl extends BaseCrudDaoImpl implements PdWrkactMainRelDao {
    @Resource
    private PdWrkactMainRelMapper pdWrkactMainRelMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWrkactMainRelMapper;
    }
}