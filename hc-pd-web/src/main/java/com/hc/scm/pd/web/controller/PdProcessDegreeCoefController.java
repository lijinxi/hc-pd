package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdProcessDegreeCoef;
import com.hc.scm.pd.service.PdProcessDegreeCoefService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-04-29 10:39:58
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_process_degree_coef")
public class PdProcessDegreeCoefController extends BaseCrudController<PdProcessDegreeCoef> {
    @Resource
    private PdProcessDegreeCoefService pdProcessDegreeCoefService;

    @Override
    public BaseCrudService init() {
        return pdProcessDegreeCoefService;
    }
}