package lt2021.birzelis.client;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class ClientFromService {

	private Long id;
	private String name;
	private String lastname;

	@Temporal(TemporalType.TIMESTAMP)
	private Date birthdate;

	private String phoneNumber;

	@Enumerated(EnumType.STRING)
	private ClientType type;

	public ClientFromService() {
		super();
	}

	public ClientFromService(Long id, String name, String lastname, Date birthdate, String phoneNumber,
			ClientType type) {
		super();
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.birthdate = birthdate;
		this.phoneNumber = phoneNumber;
		this.type = type;
	}

	public ClientFromService(String name, String lastname, Date birthdate, String phoneNumber, ClientType type) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.birthdate = birthdate;
		this.phoneNumber = phoneNumber;
		this.type = type;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getLastname() {
		return lastname;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public ClientType getType() {
		return type;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setType(ClientType type) {
		this.type = type;
	}

}
