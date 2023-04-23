package board_mybatis.service;

import java.util.List;

import board.model.BoardDao;
import board_mybatis.model.BoardException;
import board_mybatis.model.BoardRec;
import board_mybatis.model.BoardRepository;

public class ViewArticleService {
	private static ViewArticleService instance;
	public static ViewArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new ViewArticleService();
		}
		return instance;
	}
	
	BoardRepository repo = new BoardRepository();

	public BoardRec getArticleById(String article_id){
		/*int article_id = 0;
		if( id != null ) article_id = Integer.parseInt(id);
		BoardDao dao = BoardDao.getInstance();
		BoardRec rec = dao.selectById(article_id);		
		dao.increaseReadCount(article_id);
		return rec;
		 * */
		
		
		int aId = Integer.parseInt(article_id);
		BoardRec rec = repo.getArticleById(aId);
	    repo.increaseReadCount(rec); // 조회수 증가
	    return rec;
	}	
}
