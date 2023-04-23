package board_mybatis.service;

import java.text.DecimalFormat;
import java.util.List;

import board_mybatis.model.BoardException;
import board_mybatis.model.BoardRec;
import board_mybatis.model.BoardRepository;

public class WriteArticleService {
	
	private static WriteArticleService instance;
	public static WriteArticleService getInstance()  throws BoardException{
		if( instance == null )
		{
			instance = new WriteArticleService();
		}
		return instance;
	}
	
	BoardRepository repo = new BoardRepository();
	
	public BoardRec write( BoardRec rec ) throws BoardException{
		
		// 그룹번호(group_id) 지정
		int groupId = repo.getGroupId();
		rec.setGroupId(groupId);
		
		// 순서번호(sequence_no) 지정
		DecimalFormat dformat = new DecimalFormat("0000000000");
		rec.setSequenceNo( dformat.format(groupId) + "999999");
		
		// DB에 insert
		repo.insertBoard(rec);

		// 여기서 입력된 글번호를 얻어와야 View 페이지 이동이 가능
		
		return rec;
		
	}
	
	

}
