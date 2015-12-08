package com.hc.scm.pd.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.common.model.CustomerRequest;
import com.hc.scm.common.model.MasterRequest;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.BillUtils;
import com.hc.scm.common.utils.CommonUtil;
import com.hc.scm.common.utils.ResultModel;
import com.hc.scm.common.utils.SpringComponent;
import com.hc.scm.pd.dao.dal.PdWrkactFaciRelDao;
import com.hc.scm.pd.dao.dal.PdWrkactMainDao;
import com.hc.scm.pd.dao.dal.PdWrkactMainDtlDao;
import com.hc.scm.pd.dao.entity.PdWrkactMain;
import com.hc.scm.pd.dao.entity.PdWrkactMainDtl;
import com.hc.scm.pd.dao.entity.PdWrkactMainRel;
import com.hc.scm.pd.service.PdWrkactMainService;

import javax.annotation.Resource;

import org.apache.commons.lang.ObjectUtils.Null;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.weaver.ast.Call;
import org.bouncycastle.jce.provider.symmetric.Grain128.Base;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Description: 本部工序工分表 All rights Reserved, Designed By BeLLE Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh.
 * 
 * @author: yujh
 * @date: 2015-05-05 08:08:46
 * @version 1.0.0
 */
@Service("pdWrkactMainService")
class PdWrkactMainServiceImpl extends BaseCrudServiceImpl implements
		PdWrkactMainService {
	@Resource
	private PdWrkactMainDao pdWrkactMainDao;

	@Resource
	private PdWrkactMainDtlDao pdWrkactMainDtlDao; 
	
	@Resource
	private PdWrkactFaciRelDao PdWrkactFaciRelDao; 
	
	@Override
	public BaseCrudDao init() {
		return pdWrkactMainDao;
	}

	/**
	 * 审核本部工序工分表
	 */
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor = ServiceException.class)
	@Override
	public <ModelType> void audit(List<ModelType> auditModelList,SystemUser systemUser) {
		if (auditModelList != null && auditModelList.size() > 0) {
			try {
				Date date = new Date();
				for (ModelType mod : auditModelList) {
					CommonUtil.setFieldValue(mod, "auditor", mod.getClass(),systemUser.getUserName());
					CommonUtil.setFieldValue(mod, "auditTime", mod.getClass(),date);
					
					PdWrkactMain pdWrkactMain=(PdWrkactMain)mod;
					
					String wrkactNo = pdWrkactMain.getWrkactNo();
					Byte billStatus=pdWrkactMain.getBillStatus();
					Map<String, Object> params=new HashMap<String, Object>();
					params.put("wrkactNo", wrkactNo);
					
					List<PdWrkactMain> listmainList=findByBiz(null, params);
					if (listmainList!=null&&listmainList.size()>0){
						if (billStatus==5){
							//审核
							pdWrkactMainDao.audit(mod);
						}else if(billStatus==40){
							//反审核
							pdWrkactMainDao.reAudit(mod);
						}
						else{
							throw new ServiceException("审核本部工序工分表出错了，原因："+wrkactNo+"的工序工分表状态不对" );
						}
					}else{
						throw new ServiceException("审核本部工序工分表出错了，原因：没有编号"+wrkactNo+"的工序工分表" );
					}
				}
			} catch (Exception e) {
				// TODO: handle exception
				throw new ServiceException("审核本部工序工分表出错了，原因：" + e.getMessage());
			}
		}
	}

	/* (non-Javadoc)
	 * @see com.hc.scm.pd.service.PdWrkactMainService#getDtlRel(java.lang.String)
	 */
	@Override
	public Map<String, Object> getDtlRel(String wrkactNo) {
		// TODO Auto-generated method stub
		Map<String, Object> resultMap =new HashMap<String, Object>();
		Map<String, Object> params=new HashMap<String, Object>();
		ResultModel resultModel =new ResultModel();
		params.put("wrkactNo", wrkactNo);
		List<PdWrkactMainDtl> listdtl=pdWrkactMainDtlDao.findByBiz(null, params);
		List<PdWrkactMainRel> listrel=PdWrkactFaciRelDao.findByBiz(null, params);
		resultMap.put("listdtl",listdtl);
		resultMap.put("listrel",listrel);
		resultMap.put("result", resultModel);
		return resultMap;
	}

	@SuppressWarnings({ "static-access","rawtypes" })
	@Override
	@Transactional(propagation=Propagation.REQUIRED)
	public <ModelType> Object saveMasterCustomerList(ModelType modelType,List<CustomerRequest> listData
			,SystemUser systemUser,String modelClassName,MasterRequest masterRequest) throws Exception{
		try {
			Object masterId = null;
			masterId=super.saveMasterCustomerList(modelType, listData, systemUser, modelClassName, masterRequest);
			if(StringUtils.isNotBlank(masterRequest.getOperateType()) &&modelType!=null){
				if( masterRequest.getOperateType().equals(SysConstans.INSERTED_TYPE)){
					//如果主表是新增,处理主表的版本号
					String wrkactNo=(String)masterId;
					pdWrkactMainDao.onSetVersion(wrkactNo);
				}
			}
			return masterId;
		} catch (Exception e) {
			// TODO: handle exception
			throw new ServiceException("保存数据出错了，原因：" + e.getMessage());
		}
	}
}