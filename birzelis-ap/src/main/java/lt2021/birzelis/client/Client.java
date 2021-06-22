package lt2021.birzelis.client;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import lt2021.birzelis.clientInventory.ClientInventory;

@Entity
@Table(name = "Clients", uniqueConstraints = { @UniqueConstraint(columnNames = { "name", "lastname", "birthdate" }) })
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@NotNull
	private String name;
	@NotNull
	private String lastname;
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	private Date birthdate;
	@NotNull
	private String phoneNumber;
	@NotNull
	@Enumerated(EnumType.STRING)
	private ClientType type;

	@OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
	private Set<ClientInventory> clientInventory;

	public Client() {
		super();
	}

	public Client(String name, String lastname, Date birthdate, String phoneNumber, ClientType type) {
		super();
		this.name = name;
		this.lastname = lastname;
		this.birthdate = birthdate;
		this.phoneNumber = phoneNumber;
		this.type = type;
		this.clientInventory = new HashSet<>();
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

	public Set<ClientInventory> getClientInventory() {
		return clientInventory;
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

	public void setClientInventory(Set<ClientInventory> clientInventory) {
		this.clientInventory = clientInventory;
	}

}
