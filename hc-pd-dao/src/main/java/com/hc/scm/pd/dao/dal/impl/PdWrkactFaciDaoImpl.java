package com.hc.scm.pd.dao.dal.impl;

import com.hc.scm.common.base.dal.BaseCrudDaoImpl;
import com.hc.scm.common.base.mapper.BaseCrudMapper;
import com.hc.scm.common.exception.DaoException;
import com.hc.scm.pd.dao.dal.PdWrkactFaciDao;
import com.hc.scm.pd.dao.dal.PdWrkactMainDao;
import com.hc.scm.pd.dao.entity.PdWrkactFaci;
import com.hc.scm.pd.dao.mapper.PdWrkactFaciMapper;
import com.hc.scm.pd.dao.mapper.PdWrkactMainMapper;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:05
 * @version 1.0.0
 */
@Repository("pdWrkactFaciDao")
class PdWrkactFaciDaoImpl extends BaseCrudDaoImpl implements PdWrkactFaciDao {
    @Resource
    private PdWrkactFaciMapper pdWrkactFaciMapper;
    @Resource
    private PdWrkactMainMapper pdWrkactMainMapper;
    
	@Resource
	private PdWrkactMainDao pdWrkactMainDao;

    @Override
    public BaseCrudMapper init() {
        return pdWrkactFaciMapper;
    }
    
	@Override
	public <ModelType> void audit(ModelType modelType) throws DaoException {
		try {
			PdWrkactFaci pdWrkactFaci = (PdWrkactFaci) modelType;
			String wrkactNo = pdWrkactFaci.getWrkactNo();
			Byte faciBillStatus = pdWrkactFaci.getBillStatus();	
			Byte mainBillStatus = pdWrkactMainDao.onGetBillStatus(wrkactNo);
			if(faciBillStatus==5){
				if(mainBillStatus!=null&&mainBillStatus==40){
					// 更新事业部工序工分表主表状态(释放45)
					pdWrkactFaciMapper.onReleasePdWrkactFaci(pdWrkactFaci);
					//更新本部技术工序工分表状态(释放45)
					pdWrkactMainMapper.onRelease(wrkactNo);
				}
				else{
					throw new DaoException("本部相应工序工分表状态非审核,不能进行释放操作,请刷新数据");
				}
			}
			if(faciBillStatus==45){
				if(mainBillStatus!=null&&mainBillStatus==45){
					// 更新事业部工序工分表主表状态(取消释放5)
					pdWrkactFaciMapper.onRelReleasePdWrkactFaci(pdWrkactFaci);
					//更新事业部工序工分表主表状态(取消释放)40
					pdWrkactMainMapper.onRelRelease(wrkactNo);				
				}
				else{
					throw new DaoException("本部相应工序工分表状态非释放,不能进行取消释放操作,请刷新数据");
				}
			}
			
		} catch (Exception e) {
			throw new DaoException(e.getMessage());
		}
	}
}