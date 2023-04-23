package temps;

public class EmpVO {

	private String ids;
	private String password;
	private String passwords;
	private String name;
	private String tel;
	private String addr;
	
	//생성자 만들기 
	public EmpVO() {}
	
	public EmpVO(String ids, String password, String passwords, String name, String tel, String addr) {
		super();
		this.ids = ids;
		this.password = password;
		this.passwords = passwords;
		this.name = name;
		this.tel = tel;
		this.addr = addr;
	}

	public String getIds() {
		return ids;
	}

	public void setIds(String ids) {
		this.ids = ids;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswords() {
		return passwords;
	}

	public void setPasswords(String passwords) {
		this.passwords = passwords;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}


	
}
