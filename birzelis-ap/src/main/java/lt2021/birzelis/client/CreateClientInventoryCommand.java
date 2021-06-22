package lt2021.birzelis.client;

import java.util.Date;

public class CreateClientInventoryCommand {

	private Long id;
	private String name;
	private int weight;
	private int sector;
	private Date date;
	private Long clientId;

	public CreateClientInventoryCommand() {
		super();

	}

	public CreateClientInventoryCommand(Long id, String name, int weight, int sector, Date date, Long clientId) {
		super();
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.sector = sector;
		this.date = date;
		this.clientId = clientId;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getWeight() {
		return weight;
	}

	public int getSector() {
		return sector;
	}

	public Date getDate() {
		return date;
	}

	public Long getClientId() {
		return clientId;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public void setSector(int sector) {
		this.sector = sector;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setClientId(Long clientId) {
		this.clientId = clientId;
	}

}
