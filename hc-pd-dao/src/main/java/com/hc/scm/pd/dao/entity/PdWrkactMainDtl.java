package com.hc.scm.pd.dao.entity;

import java.math.BigDecimal;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
public class PdWrkactMainDtl {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 工序工分表编号
     */
    private String wrkactNo;

    /**
     * 工序编码
     */
    private String workProcessCode;

    /**
     * 工分值
     */
    private BigDecimal workValue;

    /**
     * 序号
     */
    private Short orderNo;

    /**
     * 作业组别
     */
    private String workGroupCode;

    /**
     * 单位编号
     */
    private String unitNo;

    /**
     * 标准工分定额
     */
    private String standard;

    /**
     * 函数关系
     */
    private Integer funcRelation;

    /**
     * 别名
     */
    private String aliasName;
    
    /**
     * 工序名称
     */
    private String workProcessName;
    
    /**
     * 工序描述
     */
    private String description;
    
    /**
     * 单据编号
     */
    private String billNo;
    
   
    
    /**
	 * @return the billNo
	 */
	public String getBillNo() {
		return billNo;
	}

	/**
	 * @param billNo the billNo to set
	 */
	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}

	/**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_main_dtl.wrkact_no
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_main_dtl.wrkact_no
     */
    public void setDescription(String description) {
        this.description = description;
    }
    
    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_main_dtl.wrkact_no
     */
    public String getWorkProcessName() {
        return workProcessName;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_main_dtl.wrkact_no
     */
    public void setWorkProcessName(String workProcessName) {
        this.workProcessName = workProcessName;
    }
    
    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of pd_wrkact_main_dtl.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_wrkact_main_dtl.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_main_dtl.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_main_dtl.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     *
     * @return the value of pd_wrkact_main_dtl.work_process_code
     */
    public String getWorkProcessCode() {
        return workProcessCode;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     * @param workProcessCode the value for pd_wrkact_main_dtl.work_process_code
     */
    public void setWorkProcessCode(String workProcessCode) {
        this.workProcessCode = workProcessCode;
    }

    /**
     * 
     * {@linkplain #workValue}
     *
     * @return the value of pd_wrkact_main_dtl.work_value
     */
    public BigDecimal getWorkValue() {
        return workValue;
    }

    /**
     * 
     * {@linkplain #workValue}
     * @param workValue the value for pd_wrkact_main_dtl.work_value
     */
    public void setWorkValue(BigDecimal workValue) {
        this.workValue = workValue;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of pd_wrkact_main_dtl.order_no
     */
    public Short getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for pd_wrkact_main_dtl.order_no
     */
    public void setOrderNo(Short orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     *
     * @return the value of pd_wrkact_main_dtl.work_group_code
     */
    public String getWorkGroupCode() {
        return workGroupCode;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     * @param workGroupCode the value for pd_wrkact_main_dtl.work_group_code
     */
    public void setWorkGroupCode(String workGroupCode) {
        this.workGroupCode = workGroupCode;
    }

    /**
     * 
     * {@linkplain #unitNo}
     *
     * @return the value of pd_wrkact_main_dtl.unit_no
     */
    public String getUnitNo() {
        return unitNo;
    }

    /**
     * 
     * {@linkplain #unitNo}
     * @param unitNo the value for pd_wrkact_main_dtl.unit_no
     */
    public void setUnitNo(String unitNo) {
        this.unitNo = unitNo;
    }

    /**
     * 
     * {@linkplain #standard}
     *
     * @return the value of pd_wrkact_main_dtl.standard
     */
    public String getStandard() {
        return standard;
    }

    /**
     * 
     * {@linkplain #standard}
     * @param standard the value for pd_wrkact_main_dtl.standard
     */
    public void setStandard(String standard) {
        this.standard = standard;
    }

    /**
     * 
     * {@linkplain #funcRelation}
     *
     * @return the value of pd_wrkact_main_dtl.func_relation
     */
    public Integer getFuncRelation() {
        return funcRelation;
    }

    /**
     * 
     * {@linkplain #funcRelation}
     * @param funcRelation the value for pd_wrkact_main_dtl.func_relation
     */
    public void setFuncRelation(Integer funcRelation) {
        this.funcRelation = funcRelation;
    }

    /**
     * 
     * {@linkplain #aliasName}
     *
     * @return the value of pd_wrkact_main_dtl.alias_name
     */
    public String getAliasName() {
        return aliasName;
    }

    /**
     * 
     * {@linkplain #aliasName}
     * @param aliasName the value for pd_wrkact_main_dtl.alias_name
     */
    public void setAliasName(String aliasName) {
        this.aliasName = aliasName;
    }
}