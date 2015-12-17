package com.hc.scm.pd.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:58
 * @version 1.0.0
 */
public class PdProcessDegreeCoef {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 工序价值
     */
    private Integer workProcessValue;

    /**
     * 工序系数
     */
    private BigDecimal workProcessCoef;

    /**
     * 工序等级
     */
    private String workProcessDegree;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 建档人
     */
    private String creator;

    /**
     * 建档时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改人
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of pd_process_degree_coef.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_process_degree_coef.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #workProcessValue}
     *
     * @return the value of pd_process_degree_coef.work_process_value
     */
    public Integer getWorkProcessValue() {
        return workProcessValue;
    }

    /**
     * 
     * {@linkplain #workProcessValue}
     * @param workProcessValue the value for pd_process_degree_coef.work_process_value
     */
    public void setWorkProcessValue(Integer workProcessValue) {
        this.workProcessValue = workProcessValue;
    }

    /**
     * 
     * {@linkplain #workProcessCoef}
     *
     * @return the value of pd_process_degree_coef.work_process_coef
     */
    public BigDecimal getWorkProcessCoef() {
        return workProcessCoef;
    }

    /**
     * 
     * {@linkplain #workProcessCoef}
     * @param workProcessCoef the value for pd_process_degree_coef.work_process_coef
     */
    public void setWorkProcessCoef(BigDecimal workProcessCoef) {
        this.workProcessCoef = workProcessCoef;
    }

    /**
     * 
     * {@linkplain #workProcessDegree}
     *
     * @return the value of pd_process_degree_coef.work_process_degree
     */
    public String getWorkProcessDegree() {
        return workProcessDegree;
    }

    /**
     * 
     * {@linkplain #workProcessDegree}
     * @param workProcessDegree the value for pd_process_degree_coef.work_process_degree
     */
    public void setWorkProcessDegree(String workProcessDegree) {
        this.workProcessDegree = workProcessDegree;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of pd_process_degree_coef.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for pd_process_degree_coef.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of pd_process_degree_coef.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for pd_process_degree_coef.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of pd_process_degree_coef.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for pd_process_degree_coef.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pd_process_degree_coef.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pd_process_degree_coef.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pd_process_degree_coef.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pd_process_degree_coef.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pd_process_degree_coef.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pd_process_degree_coef.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}