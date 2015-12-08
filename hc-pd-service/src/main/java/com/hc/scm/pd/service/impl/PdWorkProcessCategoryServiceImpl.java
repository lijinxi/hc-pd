package com.hc.scm.pd.service.impl;

import com.hc.scm.common.base.dal.BaseCrudDao;
import com.hc.scm.common.base.service.BaseCrudServiceImpl;
import com.hc.scm.common.exception.ServiceException;
import com.hc.scm.pd.dao.dal.PdWorkProcessCategoryDao;
import com.hc.scm.pd.service.PdWorkProcessCategoryService;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:29:59
 * @version 1.0.0
 */
@Service("pdWorkProcessCategoryService")
class PdWorkProcessCategoryServiceImpl extends BaseCrudServiceImpl implements PdWorkProcessCategoryService {
    @Resource
    private PdWorkProcessCategoryDao pdWorkProcessCategoryDao;

    @Override
    public BaseCrudDao init() {
        return pdWorkProcessCategoryDao;
    }

	@Override
	public <ModelType> String checkDeleteCate(String workCateCode)
			throws ServiceException {
		try {
			String firstCategoryNo = pdWorkProcessCategoryDao.checkProcessCategoryNo(workCateCode);
			if (firstCategoryNo==null || firstCategoryNo.isEmpty()){
				return "";
			}else{
				return "该工序类别已维护工序不允许删除！";
			}
		} catch (Exception e) {
			throw new ServiceException("检查删除出错\r\n"+e.getMessage(),e);
		}
	}
}