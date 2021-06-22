package lt2021.birzelis.inventory;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class InventoryFromService {

	private Long id;
	private double weight;
	private int sector;
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	public InventoryFromService() {
		super();

	}

	public InventoryFromService(double weight, int sector, Date date) {
		super();
		this.weight = weight;
		this.sector = sector;
		this.date = date;
	}

	public InventoryFromService(Long id, double weight, int sector, Date date) {
		super();
		this.id = id;
		this.weight = weight;
		this.sector = sector;
		this.date = date;
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

}
