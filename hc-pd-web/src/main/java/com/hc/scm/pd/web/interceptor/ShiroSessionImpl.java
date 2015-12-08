package com.hc.scm.pd.web.interceptor;

import javax.annotation.Resource;

import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheManager;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.cache.ehcache.EhCacheManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.hc.scm.common.cache.RedisClient;
import com.hc.scm.common.constans.SysConstans;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.shiro.ShiroSession;

public class ShiroSessionImpl implements ShiroSession {
	protected Logger logger = LoggerFactory.getLogger(ShiroSessionImpl.class);
	
	@Resource
	private EhCacheManager  cacheManager;
	@Resource
	private RedisClient redisClient;
	
	/**
     * 保存登录用户的session
     * @param userName
     */
	@Override
	public void saveLoginUserSession(SystemUser user) {
		Session session=getCurrentUserSession();
		if(null != session){
			session.setAttribute(SysConstans.SESSION_USER, user);
        }  
	}
	
	
	/**
	 * 获取当前的session
	 * @return
	 */
	private Session getCurrentUserSession(){
		Subject currentUser = SecurityUtils.getSubject();  
        if(null != currentUser){  
        	Session session=currentUser.getSession();
        	if (logger.isDebugEnabled()){
            	logger.debug("Session默认超时时间为[" + session.getTimeout() + "]毫秒");  
            }
            return  session;
        }
        return null;
	}


	@Override
	public SystemUser getUserByLoginNamePassword(String loginName,
			String loginPassword) {
		return getCommonSystemUser(loginName, loginPassword);
	}
	
	
	public SystemUser getCommonSystemUser(String loginName,
			String loginPassword) {
		
		//从缓存取登录对象
		SystemUser loginUser=(SystemUser) redisClient.get(SysConstans.REDIS_CACHE_USER+loginName);
		return loginUser;
	}

	/**
	 * 退出登录时清空缓存
	 * 
	 * @param loginName
	 */
	@Override
	public void removeMointorRealmCache(String loginName) {
		try {
			// 清除MointorRealm的验证及授权相关的ehcache
			if (cacheManager != null) {
				CacheManager manager = cacheManager.getCacheManager();
				Cache cache = manager.getCache("authenticationCache");
				cache.removeAll();
				cache = manager.getCache("authorizationCache");
				cache.removeAll();
			}
			redisClient.delete(SysConstans.REDIS_CACHE_USER+loginName);
			logger.debug("removeMointorRealmCache loginName:"+loginName);
		} catch (Exception e) {
			logger.error("getUserRolepermission error:", e);
		}
	}


	@Override
	public SimpleAuthorizationInfo getUserRolepermission(String loginName) {
		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
    	try {
    		/*SystemUser user=getUserByLoginNamePassword(loginName, null);
    		if(user!=null){
    			List<ItgUserRoleModel> list=itgRoleListService.getItgRoleListByLoginUser(user.getUserId().toString());
    			if(list!=null&&list.size()>0){
    				String roleName="";
        			for(ItgUserRoleModel tmp:list){
        				if(tmp.getItgRoleList().size()>0){
	        				roleName=tmp.getItgRoleList().get(0).getRoleName();
	            			info.addRole(roleName);
	        				info.addStringPermission(roleName);
        				}
            		}
        		}
        		else{
        			info.addRole("anon");
    				info.addStringPermission("anon");
        		}
    		}*/
    		//TODO
    		info.addRole("admin");
			info.addStringPermission("admin");
		} catch (Exception e) {
			logger.error("getUserRolepermission error:",e);
		}
		return info;
	}
	
}
