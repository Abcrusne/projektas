package lt2021.birzelis.inventory;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ServiceInventory {

	@Autowired
	private DBInventoryDao dao;

	@Transactional(readOnly = true)
	public List<InventoryFromService> getInventories() {
		return dao.findAll().stream()
				.map(i -> new InventoryFromService(i.getId(), i.getTitle(), i.getWeight(), i.getSector(), i.getDate()))
				.collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public InventoryFromService getInventory(Long id) {
		var i = dao.findById(id).orElse(null);
		return new InventoryFromService(i.getId(), i.getTitle(), i.getWeight(), i.getSector(), i.getDate());
	}

	@Transactional
	public void addInventory(InventoryFromService i) {
		dao.save(new Inventory(i.getId(), i.getTitle(), i.getWeight(), i.getSector(), i.getDate()));
	}

	@Transactional
	public void updateInventory(InventoryFromService i) {
		var updated = dao.findById(i.getId()).orElse(null);
		updated.setWeight(i.getWeight());
		updated.setSector(i.getSector());
		updated.setDate(i.getDate());
		dao.save(updated);
	}

	public void delete(Long id) {
		dao.deleteById(id);
	}

	public DBInventoryDao getDao() {
		return dao;
	}

	public void setDao(DBInventoryDao dao) {
		this.dao = dao;
	}

}
