package mybatis.guest.model;

import java.io.Serializable;

public class Comment implements Serializable {	//implements Serializable 필요 없긴 함
	
	private long commentNo;
	private String userId;
	private String commentContent;
	private String regDate;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Comment(int commentNo, String userId, String commentContent, String regDate) {
		super();
		this.commentNo = commentNo;
		this.userId = userId;
		this.commentContent = commentContent;
		this.regDate = regDate;
	}

	public long getCommentNo() {
		return commentNo;
	}

	public void setCommentNo(long commentNo) {
		this.commentNo = commentNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCommentContent() {
		return commentContent;
	}

	public void setCommentContent(String commentContent) {
		this.commentContent = commentContent;
	}

	public String getRegDate() {
		return regDate;
	}

	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	
	

}
