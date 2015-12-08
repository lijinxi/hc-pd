package com.hc.scm.pd.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * Session验证
 * 
 * @author wu.gy
 */
public class SessionCheckInterceptor extends AnnotationBasedIgnoreableInterceptor {
    private static Logger logger = LoggerFactory.getLogger(SessionCheckInterceptor.class);
    private String sessionKey;
    
    private String redirectUrl;
    

	/**
     *  (non-Javadoc)
     * {@inheritDoc}
     */
    @Override
    protected boolean preHandleInternal(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
    	
    	String path=redirectUrl;
    	if(logger.isDebugEnabled()){
    		logger.debug(redirectUrl);
    	}
    	if(null==request.getSession()){
    		response.sendRedirect(path);
    	}else{
    		//安全验证   redirectUrl其中设置为 /login
            if(null==request.getSession().getAttribute(sessionKey)){
            	response.sendRedirect(path);
            }else{
            	return true;
            }
    	}
        
        response.flushBuffer();

        return false;
    }

    @Override
    protected void postHandleInternal(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
    }

    @Override
    protected void afterCompletionInternal(HttpServletRequest request, HttpServletResponse response, Object handler,
            Exception ex) throws Exception {
    }

    public String getSessionKey() {
		return sessionKey;
	}

	public void setSessionKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}

	public String getRedirectUrl() {
		return redirectUrl;
	}

	public void setRedirectUrl(String redirectUrl) {
		this.redirectUrl = redirectUrl;
	}
}
