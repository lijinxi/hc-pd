package com.hc.scm.pd.dao.dal;

import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.exception.DaoException;

/**
 * Description: 请写出类的用途 All rights Reserved, Designed By BeLLE Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: yujh
 * @date: 2015-05-05 08:08:46
 * @version 1.0.0
 */
public interface PdWrkactMainDao extends BaseCrudDao {
	public <ModelType> void audit(ModelType modelType) throws DaoException;
	public <ModelType> void reAudit(ModelType modelType) throws DaoException;
	public <ModelType> void onSetVersion(String wrkactNo) throws DaoException;
	public Byte onGetBillStatus(String wrkactNo)throws DaoException;
}