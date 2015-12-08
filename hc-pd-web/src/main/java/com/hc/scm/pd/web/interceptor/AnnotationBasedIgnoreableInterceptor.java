package com.hc.scm.pd.web.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;


/**
 * 
 * TODO: 增加描述
 * 
 * @author wei.b
 * @date 2013-8-6 下午6:51:32
 * @version 0.1.0 
 * @copyright yougou.com
 */
public abstract class AnnotationBasedIgnoreableInterceptor implements HandlerInterceptor {

    abstract protected boolean preHandleInternal(HttpServletRequest request, HttpServletResponse response,
            Object handler) throws Exception;

    abstract protected void postHandleInternal(HttpServletRequest request, HttpServletResponse response,
            Object handler, ModelAndView modelAndView) throws Exception;

    abstract protected void afterCompletionInternal(HttpServletRequest request, HttpServletResponse response,
            Object handler, Exception ex) throws Exception;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	//用于区分mvc:resources, 正常的Controller请求
        if (handler==null || !HandlerMethod.class.isAssignableFrom(handler.getClass())) {
            return true;
        }
        
        /*if (isIgnoreable(handler)) {
            return true;
        }*/
        return preHandleInternal(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
    	//用于区分mvc:resources, 正常的Controller请求
        if (handler==null || !HandlerMethod.class.isAssignableFrom(handler.getClass())) {
            return;
        }
        
        /*if (isIgnoreable(handler)) {
            return;
        }*/
        postHandleInternal(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
    	//用于区分mvc:resources, 正常的Controller请求
        if (handler==null || !HandlerMethod.class.isAssignableFrom(handler.getClass())) {
            return;
        }
        
        /*if (isIgnoreable(handler)) {
            return;
        }*/
        afterCompletionInternal(request, response, handler, ex);
    }

    /*private boolean isIgnoreable(Object handler) {
    	HandlerMethod method = (HandlerMethod) handler;
    	IgnoredInterceptors ignored=method.getMethodAnnotation(IgnoredInterceptors.class);
    	if(ignored==null){
    		ignored = handler.getClass().getAnnotation(IgnoredInterceptors.class);
    	}

    	return (ignored == null)? false : true;
        //Class<? extends HandlerInterceptor>[] interceptors = ignored.value();
        //return ArrayUtils.contains(interceptors, this.getClass());
    }
    
    protected AuthLevelEnum getAuthLevelFromHandler(HandlerMethod method) {
        AuthRequired ar = method.getMethodAnnotation(AuthRequired.class);        
        if (ar == null) {
            ar = method.getBeanType().getAnnotation(AuthRequired.class);
        }
        return (ar == null)? AuthLevelEnum.NONE : ar.value();
    }*/
}
