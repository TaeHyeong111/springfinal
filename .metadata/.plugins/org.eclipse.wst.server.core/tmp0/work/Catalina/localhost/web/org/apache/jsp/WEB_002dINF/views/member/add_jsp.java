/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.11
 * Generated at: 2018-09-10 11:10:56 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.views.member;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class add_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET, POST or HEAD. Jasper also permits OPTIONS");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("<!doctype html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<body>\n");
      out.write("\t<h1>Join</h1>\n");
      out.write("\t<form id=\"joinForm\" name=\"joinForm\">\n");
      out.write("\t\tName : <input type=\"text\" name=\"name\" required/><br>\n");
      out.write("\t\tUser ID : <input type=\"text\" name=\"userid\" required/> <br>\n");
      out.write("\t\t Password : <input\ttype=\"text\" name=\"password\" required/><br>\n");
      out.write("\t\t SSN : <input type=\"text\" name=\"ssn\" required/>\n");
      out.write("\n");
      out.write("\t\t  <br>소속팀\n");
      out.write("\t\t  <input type=\"radio\" name=\"teamid\"  value=\"none\" checked=\"checked\"/> 없음\n");
      out.write("\t\t  <input type=\"radio\" name=\"teamid\"  value=\"nolja\"/>놀자\n");
      out.write("\t\t  <input type=\"radio\" name=\"teamid\"  value=\"jieunHouse\"/>지은하우스\n");
      out.write("\t\t  <input type=\"radio\" name=\"teamid\"  value=\"turtleking\"/>거북왕\n");
      out.write("\t\t  <input type=\"radio\" name=\"teamid\"  value=\"coddingZzang\"/>코딩짱\n");
      out.write("\t\t  \n");
      out.write("\t\t  <br>프로젝트역할\n");
      out.write("\t\t  <select name=\"roll\" id=\"roll\">\n");
      out.write("\t\t  <option value=\"leader\">팀장</option>\n");
      out.write("\t\t  <option value=\"front\">프론트개발</option>\n");
      out.write("\t\t  <option value=\"back\">백단개발</option>\n");
      out.write("\t\t  <option value=\"android\">안드로이드개발</option>\n");
      out.write("\t\t  <option value=\"minfe\">민폐</option>\n");
      out.write("\t\t  </select>\n");
      out.write("\t\t  \n");
      out.write("\t\t  <br>수강과목\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\"\n");
      out.write("\t\t  value=\"java\" checked=\"checked\"/> Java\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"clang\"/> C언어\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"jsp\"/> JSP\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"php\"/> PHP\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"nodejs\"/> NodsJS\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"linux\"/> Linux\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"html\"/> HTML\n");
      out.write("\t\t  <input type=\"checkbox\" name=\"subject\" value=\"spring\"/> Spring\n");
      out.write("\t</form>\n");
      out.write("\t<input id=\"joinFormBtn\" type=\"button\" value=\"제출\" /> \n");
      out.write("<script>\n");
      out.write("$('#joinFormBtn').click(function(){\n");
      out.write("\t$('#joinForm').attr({\n");
      out.write("\t\taction:'");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${ctx}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("/member/add',\n");
      out.write("\t\tmethod:\"POST\"\n");
      out.write("\t})\n");
      out.write("\t.submit()\n");
      out.write("})\n");
      out.write("</script>\n");
      out.write("</body>\n");
      out.write("</html>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
