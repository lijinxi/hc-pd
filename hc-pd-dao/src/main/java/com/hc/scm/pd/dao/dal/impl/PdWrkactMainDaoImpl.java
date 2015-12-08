package com.hc.scm.pd.dao.dal.impl;

import java.awt.List;
import java.util.HashMap;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.pd.dao.dal.PdWrkactMainDao;
import com.hc.scm.pd.dao.entity.PdWrkactMain;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciDtlMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciRelMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactMainDtlMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactMainMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactMainRelMapper;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

/**
 * Description: 请写出类的用途 All rights Reserved, Designed By BeLLE Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: yujh
 * @date: 2015-05-05 08:08:46
 * @version 1.0.0
 */
@Repository("pdWrkactMainDao")
class PdWrkactMainDaoImpl extends BaseCrudDaoImpl implements PdWrkactMainDao {
	@Resource
	private PdWrkactMainMapper pdWrkactMainMapper;

	@Resource
	private PdWrkactMainDtlMapper pdWrkactMainDtlMapper;

	@Resource
	private PdWrkactMainRelMapper pdWrkactMainRelMapper;

	@Resource
	private PdWrkactFaciMapper pdWrkactFaciMapper; 
	
	@Override
	public BaseCrudMapper init() {
		return pdWrkactMainMapper;
	}

	//审核
	@Override
	public <ModelType> void audit(ModelType modelType) throws DaoException {
		try {
			PdWrkactMain pdWrkactMain = (PdWrkactMain) modelType;
			String wrkactNo = pdWrkactMain.getWrkactNo();

			// 插入主表信息到事业部表
			pdWrkactMainMapper.auditInsertPdWrkactMain(pdWrkactMain);
			pdWrkactMainDtlMapper.auditInsertPdWrkactMainDtl(wrkactNo);
			pdWrkactMainRelMapper.auditInsertPdWrkactMainRel(wrkactNo);
			
			//审核主表
			pdWrkactMainMapper.audit(wrkactNo);
			
		} catch (Exception e) {
			throw new DaoException(e.getMessage());
		}
	}

	/* (non-Javadoc)
	 * @see com.hc.scm.pd.dao.dal.PdWrkactMainDao#reAudit(java.lang.Object)
	 */
	//反审核
	@Override
	public <ModelType> void reAudit(ModelType modelType) throws DaoException {
		// TODO Auto-generated method stub
		try {
			PdWrkactMain pdWrkactMain = (PdWrkactMain) modelType;
			String wrkactNo = pdWrkactMain.getWrkactNo();
			
			//反审核事业部工序工分表
			pdWrkactFaciMapper.onReAuditPdWrkactFaciDtl(wrkactNo);
			pdWrkactFaciMapper.onReAuditPdWrkactFaciRel(wrkactNo);
			pdWrkactFaciMapper.onReAuditPdWrkactFaci(wrkactNo);
			
			//反审核主表
			pdWrkactMainMapper.reAudit(wrkactNo);
			
		} catch (Exception e) {
			throw new DaoException(e.getMessage());
		}
	}

	/* (non-Javadoc)
	 * @see com.hc.scm.pd.dao.dal.PdWrkactMainDao#onSetVersion(java.lang.String)
	 */
	@Override
	public <ModelType> void onSetVersion(String wrkactNo) throws DaoException {
		// TODO Auto-generated method stub
		try {
			pdWrkactMainMapper.onSetVersion(wrkactNo);
		} catch (Exception e) {
			// TODO: handle exception
			throw new DaoException("设置最大版本号失败:"+e.getMessage());
		}
	}

	/* (non-Javadoc)
	 * @see com.hc.scm.pd.dao.dal.PdWrkactMainDao#onGetBillStatus(java.lang.String)
	 */
	@Override
	public Byte onGetBillStatus(String wrkactNo) throws DaoException {
		// TODO Auto-generated method stub
		Byte billStatus=null;
		Map<String, Object> params=new HashMap<String, Object>();
		params.put("wrkactNo", wrkactNo);
		java.util.List<PdWrkactMain> list=findByBiz(null, params);
		for (PdWrkactMain mod : list) {
			billStatus=mod.getBillStatus();
		}
		return billStatus;
	}
}