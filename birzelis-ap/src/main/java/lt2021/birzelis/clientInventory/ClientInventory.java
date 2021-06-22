package lt2021.birzelis.clientInventory;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lt2021.birzelis.client.Client;
import lt2021.birzelis.inventory.Inventory;

@Entity
@Table(name = "client_inventory")
public class ClientInventory {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.DETACH })
	@JoinColumn(name = "client_id")
	private Client client;

	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.DETACH })
	@JoinColumn(name = "inventory_id")
	private Inventory inventory;

	public ClientInventory() {
		super();
	}

	public Long getId() {
		return id;
	}

	public Client getClient() {
		return client;
	}

	public Inventory getInventory() {
		return inventory;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public void setInventory(Inventory inventory) {
		this.inventory = inventory;
	}

}
