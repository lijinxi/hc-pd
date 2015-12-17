package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.pd.dao.dal.PdWrkactFaciDtlDao;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciDtlMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 10:28:42
 * @version 1.0.0
 */
@Service("pdWrkactFaciDtlDao")
class PdWrkactFaciDtlDaoImpl extends BaseCrudDaoImpl implements PdWrkactFaciDtlDao {
    @Resource
    private PdWrkactFaciDtlMapper pdWrkactFaciDtlMapper;

    @Override
    public BaseCrudMapper init() {
        return pdWrkactFaciDtlMapper;
    }
}