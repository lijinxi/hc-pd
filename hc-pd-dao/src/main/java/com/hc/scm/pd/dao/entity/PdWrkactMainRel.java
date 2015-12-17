package com.hc.scm.pd.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
public class PdWrkactMainRel {
    /**
     * 行id(主键)
     */
    private Long lineId;

    /**
     * 工序工分表编号
     */
    private String wrkactNo;

    /**
     * 对应成品编号
     */
    private String materialNo;

    /**
     * 单据编号
     */
    private String billNo;
    

    private String materialName;
     
    
    private String modelNo;
    
    
    private String styleNo;
    
    /**
	 * @return the styleNo
	 */
	public String getStyleNo() {
		return styleNo;
	}

	/**
	 * @param styleNo the styleNo to set
	 */
	public void setStyleNo(String styleNo) {
		this.styleNo = styleNo;
	}

	/**
	 * @return the modelNo
	 */
	public String getModelNo() {
		return modelNo;
	}

	/**
	 * @param modelNo the modelNo to set
	 */
	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	/**
	 * @return the materialName
	 */
	public String getMaterialName() {
		return materialName;
	}

	/**
	 * @param materialName the materialName to set
	 */
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}

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
     * {@linkplain #lineId}
     *
     * @return the value of pd_wrkact_main_rel.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_wrkact_main_rel.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_main_rel.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_main_rel.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of pd_wrkact_main_rel.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for pd_wrkact_main_rel.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }
}