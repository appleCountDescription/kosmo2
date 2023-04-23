package board_mybatis.service;

import board_mybatis.model.BoardException;
import board_mybatis.model.BoardRec;
import board_mybatis.model.BoardRepository;

public class ModifyArticleService {
	private static ModifyArticleService instance;
	public static ModifyArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new ModifyArticleService();
		}
		return instance;
	}
	
	BoardRepository repo = new BoardRepository();
	
	public boolean updateBoard(BoardRec rec) {
		return repo.updateBoard(rec);
	}
}
