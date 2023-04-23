package mybatis.guest.session;

import java.io.*;
import java.util.*;

import mybatis.guest.model.Comment;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.*;

public class CommentRepository 
{
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
	
	//********************************
	//	JDBC	: Connection
	//	Mybatis : SqlSession
	public List<Comment> selectComment(String searchKey, String searchWord){
		
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			Map map = new HashMap();
			map.put(searchKey, searchWord);
			/*	[1] 채택
			 *  key		   value
			 *  user_id	   입력값
			 *	
			 *	[2] 
			 *	key		   value
			 *  searchKey   user_id
			 *  searchWord  입력값
			 */	
			
			
			return sess.selectList("CommentMapper.selectComment", map);
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}
	
	public Comment selectCommentByPK(long cId) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			Map map = new HashMap();
			map.put("commentNo", cId); 
			return sess.selectOne("CommentMapper.selectComment", map);
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}
	
	public void insertComment(Comment c) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			int result = sess.insert("CommentMapper.insertComment", c);
			if(result == 1) sess.commit();
			else sess.rollback();			
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}

	}
	
	public void deleteComment(Comment c) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			int result = sess.delete("CommentMapper.deleteComment", c);
			if(result == 1) sess.commit();
			else sess.rollback();			
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}

	}
	
	public void updateComment(Comment c) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			int result = sess.update("CommentMapper.updateComment", c);
			if(result == 1) sess.commit();
			else sess.rollback();			
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}

	}
	
	//
	public int countComment() {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			int result = sess.selectOne("CommentMapper.countComment");
			return result;
		}finally {
			sess.close();
		}
	}
	
	
	public List<Comment> selectCommentPage(int startRow, int endRow) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			Map map = new HashMap();
			map.put("startRow", startRow);
			map.put("endRow", endRow);
			
			List<Comment> result = sess.selectList("CommentMapper.selectCommentPage", map);
			return result;
		}finally {
			sess.close();
		}
	}
	
	
}
