package com.imethod.service.code.dao;


import com.imethod.core.bean.PageMaker;
import com.imethod.core.jdbc.mine.IBaseDao;
import com.imethod.service.code.domain.Code;
import org.springframework.stereotype.Repository;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;


@Repository
public class CodeDao extends IBaseDao {


    public Code loadById(Long codeId) {
        Map<String, Object> map = new HashMap<>();
        map.put("code_id", codeId);
        Code code = null;
        try {
            code = load(Code.class, map);
        } catch (IllegalAccessException | InstantiationException | InvocationTargetException e) {
            e.printStackTrace();
        }
        return code;
    }


    String SQL_LIST_CODE = "select * from code where state = 1 ";


    public PageMaker list(Long pageIndex, Long pageSize) {
        return this.queryPageList(SQL_LIST_CODE, pageIndex, pageSize, new HashMap<>());
    }


}