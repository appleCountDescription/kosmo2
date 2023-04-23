package info.bean;

public class InfoBean {

	private String name;
	private String id;
	
	public String getGender() {
		String gender = "";
		char sexNum = id.charAt(7);	// 801212-1234567
		if(sexNum=='1' | sexNum=='3') gender = "남자";
		else gender = "여자";
		return gender;
	}
	
	// setter, getter
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	
}
