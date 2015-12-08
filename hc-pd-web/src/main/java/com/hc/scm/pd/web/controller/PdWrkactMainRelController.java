package com.hc.scm.pd.web.controller;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.pd.dao.entity.PdWrkactMainRel;
import com.hc.scm.pd.service.PdWrkactMainRelService;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Description: ��д�������;
 * All rights Reserved, Designed By BeLLE
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     Administrator
 * @date:  2015-05-05 08:08:46
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pd_wrkact_main_rel")
public class PdWrkactMainRelController extends BaseCrudController<PdWrkactMainRel> {
    @Resource
    private PdWrkactMainRelService pdWrkactMainRelService;

    @Override
    public BaseCrudService init() {
        return pdWrkactMainRelService;
    }
}