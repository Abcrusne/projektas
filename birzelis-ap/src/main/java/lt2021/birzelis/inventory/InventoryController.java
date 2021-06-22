package lt2021.birzelis.inventory;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/inventories")
public class InventoryController {

	@Autowired
	private ServiceInventory service;

	@RequestMapping(method = RequestMethod.GET)
	private List<InventoryFromService> getInventories() {
		return service.getInventories();
	}

	@RequestMapping(method = RequestMethod.POST)
	public List<InventoryFromService> addInventory(@RequestBody final CreateInventoryCommand cmd) {
		service.addInventory(
				(new InventoryFromService(cmd.getTitle(), cmd.getWeight(), cmd.getSector(), cmd.getDate())));
		return service.getInventories();
	}

	@RequestMapping(path = "/{inventoryId}", method = RequestMethod.GET)
	public InventoryFromService getSingleInventory(@PathVariable final Long inventoryId) {
		return service.getInventory(inventoryId);
	}

	@RequestMapping(path = "/{inventoryId}", method = RequestMethod.DELETE)
	public void deleteInventory(@PathVariable final Long inventoryId) {
		service.delete(inventoryId);
	}

	@RequestMapping(path = "/{inventoryId}", method = RequestMethod.PUT)
	public void updateInventory(@PathVariable final Long inventoryId, @RequestBody final CreateInventoryCommand cmd) {
		service.updateInventory(
				new InventoryFromService(inventoryId, cmd.getTitle(), cmd.getWeight(), cmd.getSector(), cmd.getDate()));
	}
}
