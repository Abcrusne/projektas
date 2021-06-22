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
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lt2021.birzelis.clientInventory.ClientInventory;

@Entity
@Table(name = "inventory")
public class Inventory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String title;

	@NotNull
	private double weight;

	@Min(value = 1)
	@Max(value = 40)
	private int sector;

	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date date;

	@OneToMany(mappedBy = "inventory", cascade = CascadeType.ALL)
	private Set<ClientInventory> clientInventory;

	public Inventory() {
		super();
	}

	public Inventory(Long id, String title, double weight, int sector, Date date) {
		super();
		this.id = id;
		this.title = title;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setClientInventory(Set<ClientInventory> clientInventory) {
		this.clientInventory = clientInventory;
	}

}
