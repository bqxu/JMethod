package com.imethod.service.sys.service;

import com.imethod.service.sys.dao.AuthDao;
import com.imethod.service.sys.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * auth : iMethod
 * create_at:  15/12/1.
 * desc:
 * note:
 *  1.
 */
@Service
public class AuthService {
    @Autowired
    private AuthDao authDao;

    public User getLoginUser(String inputEmail, String inputPassword) {
        return authDao.getLoginUser(inputEmail, inputPassword);
    }
}
