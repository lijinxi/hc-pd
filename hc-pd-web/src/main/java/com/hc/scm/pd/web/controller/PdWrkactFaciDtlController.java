package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWrkactFaciDtl;
import com.hc.scm.pd.service.PdWrkactFaciDtlService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     yinlp
 * @date:  2015-05-08 10:28:42
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_wrkact_faci_dtl")
public class PdWrkactFaciDtlController extends BaseCrudController<PdWrkactFaciDtl> {
    @Resource
    private PdWrkactFaciDtlService pdWrkactFaciDtlService;

    @Override
    public BaseCrudService init() {
        return pdWrkactFaciDtlService;
    }
}