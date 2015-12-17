package com.hc.scm.pd.dao.entity;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:06
 * @version 1.0.0
 */
public class PdWrkactFaciRel {
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
     * 对应成品名称
     */
    private String materialName;
    
    /**
     * 款号
     */
    private String styleNo;
    
    /**
     * 型体
     */
    private String modelNo;

    /**
     * 
     * {@linkplain #lineId}
     *
     * @return the value of pd_wrkact_faci_rel.line_id
     */
    public Long getLineId() {
        return lineId;
    }

    /**
     * 
     * {@linkplain #lineId}
     * @param lineId the value for pd_wrkact_faci_rel.line_id
     */
    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     *
     * @return the value of pd_wrkact_faci_rel.wrkact_no
     */
    public String getWrkactNo() {
        return wrkactNo;
    }

    /**
     * 
     * {@linkplain #wrkactNo}
     * @param wrkactNo the value for pd_wrkact_faci_rel.wrkact_no
     */
    public void setWrkactNo(String wrkactNo) {
        this.wrkactNo = wrkactNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of pd_wrkact_faci_rel.material_no
     */
    public String getMaterialNo() {
        return materialNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param materialNo the value for pd_wrkact_faci_rel.material_no
     */
    public void setMaterialNo(String materialNo) {
        this.materialNo = materialNo;
    }
    
    /**
     * 
     * {@linkplain #materialNo}
     *
     * @return the value of pd_wrkact_faci_rel.material_no
     */
    public String getMaterialName() {
        return materialName;
    }

    /**
     * 
     * {@linkplain #materialName}
     * @param materialName the value for pd_wrkact_faci_rel.material_no
     */
    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }
    
    /**
     * 
     * {@linkplain #styleNo}
     *
     * @return the value of pd_wrkact_faci_rel.material_no
     */
    public String getStyleNo() {
        return styleNo;
    }

    /**
     * 
     * {@linkplain #materialNo}
     * @param styleNo the value for pd_wrkact_faci_rel.material_no
     */
    public void setStyleNo(String styleNo) {
        this.styleNo = styleNo;
    }
    
    /**
     * 
     * {@linkplain #modelNo}
     *
     * @return the value of pd_wrkact_faci_rel.material_no
     */
    public String getModelNo() {
        return modelNo;
    }

    /**
     * 
     * {@linkplain #modelNo}
     * @param modelNo the value for pd_wrkact_faci_rel.material_no
     */
    public void setModelNo(String modelNo) {
        this.modelNo = modelNo;
    }
}