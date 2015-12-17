package com.hc.scm.pd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
public class PdWrkactMain {
    /**
     * 行号id
     */
    private Long lineId;

    /**
     * 单据编号
     */
    private String billNo;

    /**
     * 工序工分表编号
     */
    private String wrkactNo;

    /**
     * 工序工分表类别
     */
    private Short wrkactType;

    /**
     * 型体
     */
    private String modelNo;

    /**
     * 款号
     */
    private String styleNo;

    /**
     * 鞋类
     */
    private String categoryNo;

    /**
     * 版本号
     */
    private Integer versionNo;

    /**
     * 表号
     */
    private String isoNo;

    /**
     * 单据状态
     */
    private Byte billStatus;

    /**
     * 创建者
     */
    private String creator;

    /**
     * 创建时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date createTime;

    /**
     * 修改者
     */
    private String modifier;

    /**
     * 修改时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date modifyTime;

    /**
     * 审核人
     */
    private String auditor;

    /**
     * 审核时间
     */
    @JSONField(format="yyyy-MM-dd HH:mm:ss")
    private Date auditTime;

    /**
     *备注
     */
    private String remarks;


	/**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of pd_wrkact_main.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_wrkact_main.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #billNo}
     *
     * @return the value of pd_wrkact_main.bill_no
     */
    public String getBillNo() {
        return billNo;
    }

    /**
     * 
     * {@linkplain #billNo}
     * @param billNo the value for pd_wrkact_main.bill_no
     */
    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_main.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_main.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactType}
     *
     * @return the value of pd_wrkact_main.wrkact_type
     */
    public Short getWrkactType() {
        return wrkactType;
    }

    /**
     * 
     * {@linkplain #wrkactType}
     * @param wrkactType the value for pd_wrkact_main.wrkact_type
     */
    public void setWrkactType(Short wrkactType) {
        this.wrkactType = wrkactType;
    }

    /**
     * 
     * {@linkplain #modelNo}
     *
     * @return the value of pd_wrkact_main.model_no
     */
    public String getModelNo() {
        return modelNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     * @param modelNo the value for pd_wrkact_main.model_no
     */
    public void setModelNo(String modelNo) {
        this.modelNo = modelNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of pd_wrkact_main.style_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #styleNo}
     * @param styleNo the value for pd_wrkact_main.style_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of pd_wrkact_main.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for pd_wrkact_main.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #versionNo}
     *
     * @return the value of pd_wrkact_main.version_no
     */
    public Integer getVersionNo() {
        return versionNo;
    }

    /**
     * 
     * {@linkplain #versionNo}
     * @param versionNo the value for pd_wrkact_main.version_no
     */
    public void setVersionNo(Integer versionNo) {
        this.versionNo = versionNo;
    }

    /**
     * 
     * {@linkplain #isoNo}
     *
     * @return the value of pd_wrkact_main.iso_no
     */
    public String getIsoNo() {
        return isoNo;
    }

    /**
     * 
     * {@linkplain #isoNo}
     * @param isoNo the value for pd_wrkact_main.iso_no
     */
    public void setIsoNo(String isoNo) {
        this.isoNo = isoNo;
    }

    /**
     * 
     * {@linkplain #billStatus}
     *
     * @return the value of pd_wrkact_main.bill_status
     */
    public Byte getBillStatus() {
        return billStatus;
    }

    /**
     * 
     * {@linkplain #billStatus}
     * @param billStatus the value for pd_wrkact_main.bill_status
     */
    public void setBillStatus(Byte billStatus) {
        this.billStatus = billStatus;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of pd_wrkact_main.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for pd_wrkact_main.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of pd_wrkact_main.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for pd_wrkact_main.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pd_wrkact_main.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pd_wrkact_main.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pd_wrkact_main.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pd_wrkact_main.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #auditor}
     *
     * @return the value of pd_wrkact_main.auditor
     */
    public String getAuditor() {
        return auditor;
    }

    /**
     * 
     * {@linkplain #auditor}
     * @param auditor the value for pd_wrkact_main.auditor
     */
    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    /**
     * 
     * {@linkplain #auditTime}
     *
     * @return the value of pd_wrkact_main.audit_time
     */
    public Date getAuditTime() {
        return auditTime;
    }

    /**
     * 
     * {@linkplain #auditTime}
     * @param auditTime the value for pd_wrkact_main.audit_time
     */
    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pd_wrkact_main.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pd_wrkact_main.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}