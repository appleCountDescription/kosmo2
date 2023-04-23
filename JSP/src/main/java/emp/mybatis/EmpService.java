package emp.mybatis;

import java.util.HashMap;
import java.util.List;

public class EmpService {
	
	private static EmpService service;
	
	private EmpService() {}
	public static EmpService getInstance(){
		if( service == null) service = new EmpService();
		return service;
	}
	
	// Model == Repository
	private EmpRepo repo = new EmpRepo();
	
	public List<EmpVO> selectEmp(){
		return repo.selectEmp();
	}
	
	
	public List<HashMap> selectEmpDept(){
		return repo.selectEmpDept();
	}
	
	 
	private static final int countPerPage = 3; // fianl: 상수
	
	public int countEmp() {
		// 전체레코드 수
		int totalRecCount = repo.countEmp();
		
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
	
	public List<HashMap> selectEmpPage(String pageNo) {
		
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
		
		List<HashMap> list = repo.selectEmpPage(startRow, endRow);
		return list;
	}
	
	

}