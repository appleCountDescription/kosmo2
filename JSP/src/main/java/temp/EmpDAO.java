package temp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

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
		String sql ="INSERT INTO emp(empno,ename,deptno,job,sal) VALUES (?,?,?,?,?)";
		
		//4. 전송객체 얻어오기
		ps = con.prepareStatement(sql);
		ps.setInt	(1,vo.getEmpno());
		ps.setString(2,vo.getEname());
		ps.setInt	(3,vo.getDeptno());
		ps.setString(4,vo.getJob());
		ps.setInt	(5,vo.getSal());
		
		//5. 전송
		ps.executeUpdate();
		}finally{	
		//6. 닫기
		ps.close();
		con.close();
		}
		
	}// end of insert
	
	public ArrayList<EmpVO> selectAll() throws SQLException{  //s
		ArrayList<EmpVO> list = new ArrayList<EmpVO>();
		
		//2.
			Connection con = DriverManager.getConnection(url,user,pass);
		//3.sql
		String sql = "SELECT empno,ename,sal,job,deptno"
				+ " FROM emp";
		
		//4.전송객체 얻어오기
		PreparedStatement ps = con.prepareStatement(sql);
		
		//5.전송
		ResultSet rs =  ps.executeQuery();
		
		while(rs.next()) {
			EmpVO vo = new EmpVO();
			vo.setEmpno(rs.getInt("empno"));
			vo.setEname(rs.getString("ename"));
			vo.setSal(rs.getInt("sal"));
			vo.setJob(rs.getString("job"));
			vo.setDeptno(rs.getInt("deptno"));
			list.add(vo);
		}
		//6.
		con.close();
		//7.
		return list;
	}
	
	 public boolean checkLogin(String inputPass, String inputUser) throws Exception{
		 	Connection con =null;
			PreparedStatement ps = null;
			
				try {
		        //2. 연결객체
		        con = DriverManager.getConnection(url,user,pass);
		        //3. sql문장
		        String sql = "SELECT * FROM EMP WHERE empno = ? AND ename = ?";

		        //4. 전송객체 얻어오기
		        ps = con.prepareStatement(sql);
		        ps.setInt(1, Integer.parseInt(inputPass));
		        ps.setString(2, inputUser);
		        
		       

		        //5. 전송
		        ResultSet rs = ps.executeQuery();
		        if (rs.next()) {
		            return true; // 이름과 사번이 일치하는 레코드가 있으면 true 반환
		        } else {	
		            return false; // 그렇지 않다면 return false;
		        }
				} finally {
					 //6. 닫기
					ps.close();
					con.close();
				}
			
			
			
	 }
	
}
