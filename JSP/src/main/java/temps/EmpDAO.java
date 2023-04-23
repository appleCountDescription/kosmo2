package temps;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

public class EmpDAO {
	
	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@192.168.0.79:1521:xe";
	String user = "scott";
	String pass = "tiger";
	
 private EmpDAO() {
	//1.드라이버 로딩
		try {
		Class.forName(driver);
		} 
		catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
}
 
 static EmpDAO dao = null;
 public static EmpDAO getInstance() throws Exception {
	 if(dao == null) {
		 dao = new EmpDAO();
	 }
	 return dao;
 } // 메모리에 단 한번만 올리오게한다
 
	
	public void insert(EmpVO vo) throws SQLException{
		Connection con =null;
		PreparedStatement ps = null;
		
		try {
		//2. 연결객체
		con = DriverManager.getConnection(url,user,pass);
		//3. sql문장
		String sql ="INSERT INTO membership(ids,password,passwords,name,tel,addr) VALUES (?,?,?,?,?,?)";
		
		//4. 전송객체 얻어오기
		ps = con.prepareStatement(sql);
		
		ps.setString(1,vo.getIds());
		ps.setString(2,vo.getPassword());
		ps.setString(3,vo.getPasswords());
		ps.setString(4,vo.getName());
		ps.setString(5,vo.getTel());
		ps.setString(6,vo.getAddr());
		
		//5. 전송
		ps.executeUpdate();
		
		}finally{	
		//6. 닫기
		ps.close();
		con.close();
		}
		
	}// end of insert
	
	
	
}
