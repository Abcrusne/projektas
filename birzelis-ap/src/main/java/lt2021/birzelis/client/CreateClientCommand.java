package lt2021.birzelis.client;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class CreateClientCommand {

	private String name;
	private String lastname;

	@Temporal(TemporalType.TIMESTAMP)
	private Date birthdate;

	private String phoneNumber;

	@Enumerated(EnumType.STRING)
	private ClientType type;

	public CreateClientCommand() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CreateClientCommand(String name, String lastname, Date birthdate, String phoneNumber, ClientType type) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.birthdate = birthdate;
		this.phoneNumber = phoneNumber;
		this.type = type;
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
