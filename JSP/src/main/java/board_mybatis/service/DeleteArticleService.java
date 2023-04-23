package board_mybatis.service;

import board_mybatis.model.BoardException;
import board_mybatis.model.BoardRec;
import board_mybatis.model.BoardRepository;

public class DeleteArticleService {
	private static DeleteArticleService instance;
	public static DeleteArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new DeleteArticleService();
		}
		return instance;
	}
	
	BoardRepository repo = new BoardRepository();
	
	public boolean deleteBoard(BoardRec rec) {
		return repo.deleteBoard(rec);
	}
}
