package emp.mybatis;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import mybatis.guest.model.Comment;

public class EmpRepo {
	//	private final String namespace = "CommentMapper";

	private SqlSessionFactory getSqlSessionFactory() {
		
		InputStream inputStream;
		try {
			inputStream = Resources.getResourceAsStream("mybatis-config.xml");
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
		SqlSessionFactory sessFactory =  new SqlSessionFactoryBuilder().build(inputStream);
		return sessFactory;
	}
	
	//-------------------------------------------
	
	public List<EmpVO> selectEmp(){
		
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			return sess.selectList("EmpMapper.selectEmp");
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}
	
	public List<HashMap> selectEmpDept(){
		
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			return sess.selectList("EmpMapper.selectEmpDept");
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}
	
	public int countEmp() {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			int result = sess.selectOne("EmpMapper.countEmp");
			return result;
		}finally {
			sess.close();
		}
	}
	
	
	public List<HashMap> selectEmpPage(int startRow, int endRow) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			Map map = new HashMap();
			map.put("startRow", startRow);
			map.put("endRow", endRow);
			
			List<HashMap> result = sess.selectList("EmpMapper.selectEmpPage", map);
			return result;
		}finally {
			sess.close();
		}
	}
	
}
