package com.hc.scm.pd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed ByBeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 13:56:13
 * @version 1.0.0
 */
public class PdWorkGroup {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 作业组类别
     */
    private String workGroupType;

    /**
     * 作业组编码
     */
    private String workGroupCode;

    /**
     * 作业组名称
     */
    private String workGroupName;

    /**
     * 启用状态(0=禁用 1=启用)
     */
    private Integer enableFlag;

    /**
     * 描述
     */
    private String description;

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
     * @return the value of pd_work_group.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_work_group.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #workGroupType}
     *
     * @return the value of pd_work_group.work_group_type
     */
    public String getWorkGroupType() {
        return workGroupType;
    }

    /**
     * 
     * {@linkplain #workGroupType}
     * @param workGroupType the value for pd_work_group.work_group_type
     */
    public void setWorkGroupType(String workGroupType) {
        this.workGroupType = workGroupType;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     *
     * @return the value of pd_work_group.work_group_code
     */
    public String getWorkGroupCode() {
        return workGroupCode;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     * @param workGroupCode the value for pd_work_group.work_group_code
     */
    public void setWorkGroupCode(String workGroupCode) {
        this.workGroupCode = workGroupCode;
    }

    /**
     * 
     * {@linkplain #workGroupName}
     *
     * @return the value of pd_work_group.work_group_name
     */
    public String getWorkGroupName() {
        return workGroupName;
    }

    /**
     * 
     * {@linkplain #workGroupName}
     * @param workGroupName the value for pd_work_group.work_group_name
     */
    public void setWorkGroupName(String workGroupName) {
        this.workGroupName = workGroupName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of pd_work_group.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for pd_work_group.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #description}
     *
     * @return the value of pd_work_group.description
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * {@linkplain #description}
     * @param description the value for pd_work_group.description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of pd_work_group.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for pd_work_group.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of pd_work_group.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for pd_work_group.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pd_work_group.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pd_work_group.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pd_work_group.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pd_work_group.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pd_work_group.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pd_work_group.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}