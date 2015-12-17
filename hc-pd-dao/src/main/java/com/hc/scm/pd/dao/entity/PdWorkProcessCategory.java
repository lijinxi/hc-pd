package com.hc.scm.pd.dao.entity;

import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 17:34:08
 * @version 1.0.0
 */
public class PdWorkProcessCategory {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 工序类别编码
     */
    private String workCateCode;

    /**
     * 工序类别名称
     */
    private String workCateName;

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
     * @return the value of pd_work_process_category.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_work_process_category.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #workCateCode}
     *
     * @return the value of pd_work_process_category.work_cate_code
     */
    public String getWorkCateCode() {
        return workCateCode;
    }

    /**
     * 
     * {@linkplain #workCateCode}
     * @param workCateCode the value for pd_work_process_category.work_cate_code
     */
    public void setWorkCateCode(String workCateCode) {
        this.workCateCode = workCateCode;
    }

    /**
     * 
     * {@linkplain #workCateName}
     *
     * @return the value of pd_work_process_category.work_cate_name
     */
    public String getWorkCateName() {
        return workCateName;
    }

    /**
     * 
     * {@linkplain #workCateName}
     * @param workCateName the value for pd_work_process_category.work_cate_name
     */
    public void setWorkCateName(String workCateName) {
        this.workCateName = workCateName;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of pd_work_process_category.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for pd_work_process_category.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #description}
     *
     * @return the value of pd_work_process_category.description
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * {@linkplain #description}
     * @param description the value for pd_work_process_category.description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of pd_work_process_category.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for pd_work_process_category.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of pd_work_process_category.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for pd_work_process_category.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pd_work_process_category.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pd_work_process_category.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pd_work_process_category.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pd_work_process_category.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pd_work_process_category.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pd_work_process_category.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}