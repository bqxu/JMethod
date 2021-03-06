package com.imethod.service.sys.dao;


import com.imethod.core.bean.PageMaker;
import com.imethod.core.jdbc.mine.IBaseDao;
import com.imethod.core.util.StringTools;
import com.imethod.service.sys.domain.User;
import org.springframework.stereotype.Repository;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;


@Repository
public class UserDao extends IBaseDao {


    public User loadById(Long userId) {
        Map<String, Object> map = new HashMap<>();
        map.put("user_id", userId);
        User user = null;
        try {
            user = load(User.class, map);
        } catch (IllegalAccessException | InstantiationException | InvocationTargetException e) {
            e.printStackTrace();
        }
        return user;
    }


    String SQL_LIST_USER = "select * from user where state = 1 ";

    public PageMaker list(Long pageIndex, Long pageSize) {
        return this.queryPageList(SQL_LIST_USER, pageIndex, pageSize, new HashMap<>());
    }


    public PageMaker listUser(String query, Long pageIndex, Long pageSize) {
        Map<String, Object> map = new HashMap<>();
        StringBuffer buffer = new StringBuffer();
        buffer.append(SQL_LIST_USER);
        if (StringTools.isNotEmpty(query)) {
            buffer.append(" and ( user_name like :query or mobile like :query or email like :query) ");
            map.put("query", getISqlHelp().like(query));
        }

        return this.queryPageList(buffer.toString(), pageIndex, pageSize, map);
    }

}