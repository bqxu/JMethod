package com.imethod.service.code.service;


import com.imethod.core.bean.PageMaker;
import com.imethod.core.log.Logger;
import com.imethod.core.log.LoggerFactory;
import com.imethod.core.util.ExceptionTools;
import com.imethod.service.code.dao.CodeDao;
import com.imethod.service.code.domain.Code;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.InvocationTargetException;


@Service
public class CodeService {


    Logger logger = LoggerFactory.getLogger(CodeService.class);


    @Autowired
    private CodeDao codeDao;


    public void insert(Code code) {
        codeDao.insert(code);
    }


    public void update(Code code) {
        try {
            codeDao.update(code);
        } catch (IllegalAccessException | InvocationTargetException e) {
            logger.error(e.getMessage());
            ExceptionTools.unchecked(e);
        }
    }


    public PageMaker list(Long pageIndex, Long pageSize) {
        return codeDao.list(pageIndex, pageSize);
    }


    public Code loadById(Long codeId) {
        return codeDao.loadById(codeId);
    }


}