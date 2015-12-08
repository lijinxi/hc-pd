package com.hc.scm.pd.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
public interface PdWrkactMainMapper extends BaseCrudMapper {
	public <ModelType> int auditInsertPdWrkactMain(ModelType record);
	public <ModelType> int audit(String wrkactNo);
	public <ModelType> int reAudit(String wrkactNo);
	public <ModelType> int onRelease(String wrkactNo);
	public <ModelType> int onRelRelease(String wrkactNo);
	public <ModelType> int onSetVersion(String wrkactNo);
}