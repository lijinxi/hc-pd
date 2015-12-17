package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWrkactFaciRel;
import com.hc.scm.pd.service.PdWrkactFaciRelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By hc* Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 09:22:06
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_wrkact_faci_rel")
public class PdWrkactFaciRelController extends BaseCrudController<PdWrkactFaciRel> {
    @Resource
    private PdWrkactFaciRelService pdWrkactFaciRelService;

    @Override
    public BaseCrudService init() {
        return pdWrkactFaciRelService;
    }
}