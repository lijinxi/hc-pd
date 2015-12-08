package com.hc.scm.pd.dao.mapper;

import com.hc.scm.common.base.mapper.BaseCrudMapper;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:05
 * @version 1.0.0
 */
public interface PdWrkactFaciMapper extends BaseCrudMapper {
	public <ModelType> int onReleasePdWrkactFaci(ModelType modelType);
	public <ModelType> int onRelReleasePdWrkactFaci(ModelType modelType);
	
	public <ModelType> int onReAuditPdWrkactFaci(String wrkactNo);
	public <ModelType> int onReAuditPdWrkactFaciDtl(String wrkactNo);
	public <ModelType> int onReAuditPdWrkactFaciRel(String wrkactNo);
}
