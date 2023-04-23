package mybatis.guest.service;

import java.util.*;

import mybatis.guest.model.Comment;
import mybatis.guest.session.CommentRepository;

public class CommentService {
	
	private static CommentService service;
	
	private CommentService() {}
	
	public static CommentService getInstance(){
		if( service == null) service = new CommentService();
		return service;
	}
	
	// Model == Repository
	private CommentRepository repo = new CommentRepository();
	
	public List<Comment> selectComment(String searchKey, String searchWord){
		return repo.selectComment(searchKey, searchWord);
	}
	
	public Comment selectCommentByPK(long cId) {
		return repo.selectCommentByPK(cId);
	}
	
	public void insertComment(Comment c) {
		repo.insertComment(c);
	}
	
	public void deleteComment(Comment c) {
		repo.deleteComment(c);
	}
	
	public void updateComment(Comment c) {
		repo.updateComment(c);
	}
	 
	private static final int countPerPage = 3; // fianl: 상수
	
	public int countComment() {
		// 전체레코드 수
		int totalRecCount = repo.countComment();
		
		/*	- 한 페이지에 리코드 수 : 3개
		 * 
		 * 	전체레코드 수		페이지 수
		 *  9				3
		 *  10				4
		 *  11				4
		 *  12				4
		 *  13				5
		 */
		int pageTotalCount = 0;
		
		pageTotalCount = (totalRecCount+2)/countPerPage;
		
		return pageTotalCount;
	}
	
	public List<Comment> selectCommentPage(String pageNo) {
		
		int pageNum = 1;
		if(pageNo != null) pageNum = Integer.parseInt(pageNo);
		
		/*	페이지번호		시작글번호		끝번호
		 * 	  1 		   1 		  3
		 * 	  2 		   4		  6
		 *    3			   7		  9
		 *    4			  10         12
		 *    5 		  13		 15
		 */
		
		int startRow = 0;
		int endRow = 0;
		
		endRow = pageNum*countPerPage;
		startRow = endRow-2;
		
		List<Comment> list = repo.selectCommentPage(startRow, endRow);
		return list;
	}
	
	

}