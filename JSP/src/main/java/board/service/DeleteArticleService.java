package board.service;

import board.model.*;

public class DeleteArticleService {
	
	private static DeleteArticleService instance;
	
	public static DeleteArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new DeleteArticleService();
		}
		return instance;
	}
	
	public int delete( String articleId, String password ) throws BoardException{
		
		// DB delete
		int bId = 0;
		if( articleId!=null ) bId = Integer.parseInt( articleId );
		
		int result = BoardDao.getInstance().delete(bId, password);
		return result;
		
		/*
		 * BoardDao bDao = BoardDao.getInstance();
		 * 
		 * return bDao.delete(bId, password);
		 */
		
	}
}
