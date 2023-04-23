package temp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/HelloServlet")
public class HelloServlet extends HttpServlet {
	//내가 만든 클래스에 HttpServlet 상속받음

	//private static final long serialVersionUID = 1L;
       
    
	/*
	 * public HelloServlet() { super(); }//생성자 함수 필요없음
	 */
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	response.setContentType("text/html;charset=utf-8"); // 이렇게 해야 한글로 뜬다
	PrintWriter out = response.getWriter();
	
	out.println("<html>");
	out.println("<head><title>첫 서블릿</title><head/>");
	out.println("<body>");
	out.println("<h2>웹 서버 프로그램</h2>");
	out.println("</body>");
	out.println("</html>");
	
	out.close();
	}//form 에서의 get 방식 request 클라이언트가 서버에게 요청할 때 사용하는 객체  response 서버가 클라이언트에게 요청받을걸 넘겨줄 때 사용하는 객체

	
	/*
	 * protected void doPost(HttpServletRequest request, HttpServletResponse
	 * response) throws ServletException, IOException {
	 * 
	 * doGet(request, response); }//form에서의 post 방식
	 */
}
