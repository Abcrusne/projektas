package lt2021.birzelis.inventory;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lt2021.birzelis.clientInventory.ClientInventory;

@Entity
@Table(name = "inventory")
public class Inventory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private double weight;
	private int sector;
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	@OneToMany(mappedBy = "inventory", cascade = CascadeType.ALL)
	private Set<ClientInventory> clientInventory;

	public Inventory() {
		super();
	}

	public Inventory(Long id, double weight, int sector, Date date) {
		super();
		this.id = id;
		this.weight = weight;
		this.sector = sector;
		this.date = date;
		this.clientInventory = new HashSet<>();
	}

	public Long getId() {
		return id;
	}

	public double getWeight() {
		return weight;
	}

	public int getSector() {
		return sector;
	}

	public Date getDate() {
		return date;
	}

	public Set<ClientInventory> getClientInventory() {
		return clientInventory;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public void setSector(int sector) {
		this.sector = sector;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public void setClientInventory(Set<ClientInventory> clientInventory) {
		this.clientInventory = clientInventory;
	}

}
