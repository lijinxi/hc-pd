package com.hc.scm.pd.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:34:08
 * @version 1.0.0
 */
public interface PdWorkProcessCategoryMapper extends BaseCrudMapper {
	public <ModelType> String checkCategoryNo(String workCateCode);

}