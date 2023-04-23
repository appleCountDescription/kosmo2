package board_mybatis.model;

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

public class BoardRepository {
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
	

	public int getGroupId() {
		
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			
			return session.selectOne("BoardMapper.seqGroupId");
		}finally {
			session.close();
		}
	}

	public int insertBoard(BoardRec rec) {
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			int result = session.insert("BoardMapper.insertBoard", rec);
			if(result!=0) session.commit();
			return result;
		}finally {
			session.close();
		}
	}

	public List<BoardRec> getBoardList(){
		
		SqlSession session = getSqlSessionFactory().openSession();
		try {
			List<BoardRec> result = session.selectList("BoardMapper.getBoardList");
			return result;
		}finally {
			session.close();
		}
	}

	public BoardRec getArticleById(int articleId){
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			Map map = new HashMap();
			map.put("articleId", articleId); 
			return sess.selectOne("BoardMapper.getBoardListByPK", map);
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}

	
	public String selectLastNumber(String maxSeqNum, String minSeqNum) {
		SqlSession sess = getSqlSessionFactory().openSession();
		try {
			HashMap map = new HashMap();
			map.put("maxSeqNum", maxSeqNum);
			map.put("minSeqNum", minSeqNum);
			return sess.selectOne("BoardMapper.selectLastNumber", map);
		}finally {
			sess.close();
		}		
	}
	
	
	public boolean deleteBoard(BoardRec rec) {
		SqlSession sess = getSqlSessionFactory().openSession();
		boolean isDeleted = false;
		try {
			int result = sess.delete("BoardMapper.deleteBoard", rec);
			if(result == 1) {
				sess.commit();
				isDeleted = true;
				return isDeleted;
			}
				else {
					sess.rollback();
					return isDeleted;
				}	
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}
	}
	
	public boolean updateBoard(BoardRec rec) {
		SqlSession sess = getSqlSessionFactory().openSession();
		boolean isUpdated = false;
		try {
			int result = sess.update("BoardMapper.updateBoard", rec);
			if(result == 1) {
				sess.commit();
				isUpdated = true;
				return isUpdated;
			}
			else {
				sess.rollback();			
				return isUpdated;
			}
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}

	}
	
	public boolean increaseReadCount(BoardRec rec) {
		SqlSession sess = getSqlSessionFactory().openSession();
		boolean isUpdated = false;
		try {
			int result = sess.update("BoardMapper.increaseReadCount", rec);
			if(result == 1) {
				sess.commit();
				isUpdated = true;
				return isUpdated;
			}
			else {
				sess.rollback();			
				return isUpdated;
			}
		}finally {
			sess.close();//사용한 연결 객체를 ConnectionPool로 반환
		}

	}
	
	
	
}
