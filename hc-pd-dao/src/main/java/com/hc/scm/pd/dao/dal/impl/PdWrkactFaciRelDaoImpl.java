package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdWrkactFaciRelDao;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciRelMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:06
 * @version 1.0.0
 */
@Repository("pdWrkactFaciRelDao")
class PdWrkactFaciRelDaoImpl extends BaseCrudDaoImpl implements PdWrkactFaciRelDao {
    @Resource
    private PdWrkactFaciRelMapper pdWrkactFaciRelMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWrkactFaciRelMapper;
    }
}