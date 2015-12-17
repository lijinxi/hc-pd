package com.hc.scm.pd.dao.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-04-29 10:38:38
 * @version 1.0.0
 */
public class PdWorkProcess {
    /**
     * 工序ID
     */
    private Integer processId;

    /**
     * 工序编码
     */
    private String workProcessCode;

    /**
     * 排列序号
     */
    private Integer orderNo;

    /**
     * 工序名称
     */
    private String workProcessName;

    /**
     * 标准工分定额
     */
    private BigDecimal workValue;

    /**
     * 作业组
     */
    private String workGroupCode;

    /**
     * 是否为虚工序
     */
    private Integer isVirtual;

    /**
     * 父工序ID
     */
    private Integer parentProcessId;

    /**
     * 计算单位
     */
    private Integer units;

    /**
     * 鞋类
     */
    private String categoryNo;

    /**
     * 描述
     */
    private String description;

    /**
     * 工序价值
     */
    private Integer workProcessValue;

    /**
     * 工序类别
     */
    private String workCateCode;

    /**
     * 
     */
    private Integer levelNo;
    
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
     * 工序类别名称
     */
    private String workCateName;
    
    /**
     * 作业组编号名称
     */
    private String workGroupCodeName;    
    
    /**
     * 鞋类别名称
     */
    private String categoryName;
    /**
     * 
     * {@linkplain #processId}
     *
     * @return the value of pd_work_process.process_id
     */
    public Integer getProcessId() {
        return processId;
    }

    /**
     * 
     * {@linkplain #processId}
     * @param processId the value for pd_work_process.process_id
     */
    public void setProcessId(Integer processId) {
        this.processId = processId;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     *
     * @return the value of pd_work_process.work_process_code
     */
    public String getWorkProcessCode() {
        return workProcessCode;
    }

    /**
     * 
     * {@linkplain #workProcessCode}
     * @param workProcessCode the value for pd_work_process.work_process_code
     */
    public void setWorkProcessCode(String workProcessCode) {
        this.workProcessCode = workProcessCode;
    }

    /**
     * 
     * {@linkplain #orderNo}
     *
     * @return the value of pd_work_process.order_no
     */
    public Integer getOrderNo() {
        return orderNo;
    }

    /**
     * 
     * {@linkplain #orderNo}
     * @param orderNo the value for pd_work_process.order_no
     */
    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }

    /**
     * 
     * {@linkplain #workProcessName}
     *
     * @return the value of pd_work_process.work_process_name
     */
    public String getWorkProcessName() {
        return workProcessName;
    }

    /**
     * 
     * {@linkplain #workProcessName}
     * @param workProcessName the value for pd_work_process.work_process_name
     */
    public void setWorkProcessName(String workProcessName) {
        this.workProcessName = workProcessName;
    }

    /**
     * 
     * {@linkplain #workValue}
     *
     * @return the value of pd_work_process.work_value
     */
    public BigDecimal getWorkValue() {
        return workValue;
    }

    /**
     * 
     * {@linkplain #workValue}
     * @param workValue the value for pd_work_process.work_value
     */
    public void setWorkValue(BigDecimal workValue) {
        this.workValue = workValue;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     *
     * @return the value of pd_work_process.work_group_code
     */
    public String getWorkGroupCode() {
        return workGroupCode;
    }

    /**
     * 
     * {@linkplain #workGroupCode}
     * @param workGroupCode the value for pd_work_process.work_group_code
     */
    public void setWorkGroupCode(String workGroupCode) {
        this.workGroupCode = workGroupCode;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     *
     * @return the value of pd_work_process.is_virtual
     */
    public Integer getIsVirtual() {
        return isVirtual;
    }

    /**
     * 
     * {@linkplain #isVirtual}
     * @param isVirtual the value for pd_work_process.is_virtual
     */
    public void setIsVirtual(Integer isVirtual) {
        this.isVirtual = isVirtual;
    }

    /**
     * 
     * {@linkplain #parentProcessId}
     *
     * @return the value of pd_work_process.parent_process_id
     */
    public Integer getParentProcessId() {
        return parentProcessId;
    }

    /**
     * 
     * {@linkplain #parentProcessId}
     * @param parentProcessId the value for pd_work_process.parent_process_id
     */
    public void setParentProcessId(Integer parentProcessId) {
        this.parentProcessId = parentProcessId;
    }

    /**
     * 
     * {@linkplain #units}
     *
     * @return the value of pd_work_process.units
     */
    public Integer getUnits() {
        return units;
    }

    /**
     * 
     * {@linkplain #units}
     * @param units the value for pd_work_process.units
     */
    public void setUnits(Integer units) {
        this.units = units;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     *
     * @return the value of pd_work_process.category_no
     */
    public String getCategoryNo() {
        return categoryNo;
    }

    /**
     * 
     * {@linkplain #categoryNo}
     * @param categoryNo the value for pd_work_process.category_no
     */
    public void setCategoryNo(String categoryNo) {
        this.categoryNo = categoryNo;
    }

    /**
     * 
     * {@linkplain #description}
     *
     * @return the value of pd_work_process.description
     */
    public String getDescription() {
        return description;
    }

    /**
     * 
     * {@linkplain #description}
     * @param description the value for pd_work_process.description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * 
     * {@linkplain #workProcessValue}
     *
     * @return the value of pd_work_process.work_process_value
     */
    public Integer getWorkProcessValue() {
        return workProcessValue;
    }

    /**
     * 
     * {@linkplain #workProcessValue}
     * @param workProcessValue the value for pd_work_process.work_process_value
     */
    public void setWorkProcessValue(Integer workProcessValue) {
        this.workProcessValue = workProcessValue;
    }

    /**
     * 
     * {@linkplain #workCateCode}
     *
     * @return the value of pd_work_process.work_type_code
     */
    public String getWorkCateCode() {
        return workCateCode;
    }

    /**
     * 
     * {@linkplain #workCateCode}
     * @param workTypeCode the value for pd_work_process.work_type_code
     */
    public void setWorkCateCode(String workCateCode) {
        this.workCateCode = workCateCode;
    }
    
    public Integer getLevelNo() {
		return levelNo;
	}

	public void setLevelNo(Integer levelNo) {
		this.levelNo = levelNo;
	}

	/**
     * 
     * {@linkplain #enableFlag}
     *
     * @return the value of pd_work_process.enable_flag
     */
    public Integer getEnableFlag() {
        return enableFlag;
    }

    /**
     * 
     * {@linkplain #enableFlag}
     * @param enableFlag the value for pd_work_process.enable_flag
     */
    public void setEnableFlag(Integer enableFlag) {
        this.enableFlag = enableFlag;
    }

    /**
     * 
     * {@linkplain #creator}
     *
     * @return the value of pd_work_process.creator
     */
    public String getCreator() {
        return creator;
    }

    /**
     * 
     * {@linkplain #creator}
     * @param creator the value for pd_work_process.creator
     */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /**
     * 
     * {@linkplain #createTime}
     *
     * @return the value of pd_work_process.create_time
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 
     * {@linkplain #createTime}
     * @param createTime the value for pd_work_process.create_time
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 
     * {@linkplain #modifier}
     *
     * @return the value of pd_work_process.modifier
     */
    public String getModifier() {
        return modifier;
    }

    /**
     * 
     * {@linkplain #modifier}
     * @param modifier the value for pd_work_process.modifier
     */
    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     *
     * @return the value of pd_work_process.modify_time
     */
    public Date getModifyTime() {
        return modifyTime;
    }

    /**
     * 
     * {@linkplain #modifyTime}
     * @param modifyTime the value for pd_work_process.modify_time
     */
    public void setModifyTime(Date modifyTime) {
        this.modifyTime = modifyTime;
    }

    /**
     * 
     * {@linkplain #remarks}
     *
     * @return the value of pd_work_process.remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * 
     * {@linkplain #remarks}
     * @param remarks the value for pd_work_process.remarks
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
    
	public String getWorkGroupCodeName() {
		return workGroupCodeName;
	}

	public void setWorkGroupCodeName(String workGroupCodeName) {
		this.workGroupCodeName = workGroupCodeName;
	}

	public String getWorkCateName() {
		return workCateName;
	}

	public void setWorkCateName(String workCateName) {
		this.workCateName = workCateName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
}